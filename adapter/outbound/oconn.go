package outbound

import (
	"fmt"
	"github.com/cloudwego/hertz/pkg/common/hlog"
	"github.com/fatih/color"
	"github.com/metacubex/mihomo/global"
	"net"
)

type Oconn struct {
	net.Conn
	//Host   string
	//IP     string
	Remote      string
	Name        string
	RewriteReq  bool
	RewriteResp bool
}

// 响应数据
func (s *Oconn) Read(b []byte) (n int, err error) {
	n, err = s.Conn.Read(b)
	if err != nil {
		return n, err
	}

	request := make([]byte, n)
	copy(request, b)
	if s.RewriteResp {
		//fmt.Printf("remote write ip name:%s %v\n", s.Remote, s.Name)
		var replaceSrc []byte
		var srcPackage []byte
		for _, v := range global.Replacers {
			request, err, replaceSrc, srcPackage = v.Replace(request)
			for err == nil {
				go hlog.Debugf("read , replaceSrc: %s replaceSrc:%s", string(replaceSrc), string(srcPackage))
				request, err, replaceSrc, srcPackage = v.Replace(request)
			}
		}
	}
	// 回写
	copy(b, request)

	hexStr := encodeToString(request)
	color.New(color.BgGreen).Printf("resphex:%v\n", hexStr)
	fmt.Printf("resp:RemoteAddr:%s\n%v\n", s.RemoteAddr().String(), string(request))
	val, ok := global.AddrRespMap.Load(s.RemoteAddr().String())
	if !ok {
		global.AddrRespMap.Store(s.RemoteAddr().String(), string(request))
	} else {
		global.AddrRespMap.Store(s.RemoteAddr().String(), val.(string)+string(request))
	}

	return n, nil

}

// 发送数据
func (s *Oconn) Write(request []byte) (n int, err error) {
	if s.RewriteReq {
		var replaceSrc []byte
		var srcPackage []byte
		for _, v := range global.Replacers {
			request, err, replaceSrc, srcPackage = v.Replace(request)
			for err == nil {
				go hlog.Debugf("write , replaceSrc: %s replaceSrc:%s", string(replaceSrc), string(srcPackage))
				request, err, replaceSrc, srcPackage = v.Replace(request)
			}
		}
	}

	n, err = s.Conn.Write(request)
	if err != nil {
		return n, err
	}
	hexStr := encodeToString(request)

	color.New(color.BgYellow).Printf("reqhex:%v\n", hexStr)
	fmt.Printf("req:RemoteAddr:%s\n%v\n", s.RemoteAddr().String(), string(request))
	val, ok := global.AddrReqMap.Load(s.RemoteAddr().String())
	if !ok {
		global.AddrReqMap.Store(s.RemoteAddr().String(), string(request))
	} else {
		global.AddrReqMap.Store(s.RemoteAddr().String(), val.(string)+string(request))
	}

	return n, nil
}
