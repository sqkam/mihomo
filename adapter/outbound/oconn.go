package outbound

import (
	"fmt"
	"github.com/cloudwego/hertz/pkg/common/hlog"
	"github.com/metacubex/mihomo/global"
	"net"
)

type Oconn struct {
	net.Conn
	//Host   string
	//IP     string
	Remote  string
	Name    string
	Rewrite bool
	IsOut   bool
}

func (s *Oconn) Read(request []byte) (n int, err error) {
	n, err = s.Conn.Read(request)
	if err != nil {
		return n, err
	}
	if s.IsOut && n > 0 {
		resp := make([]byte, n)
		copy(resp, request)
		//fmt.Printf("%v\n", string(resp))
		//fmt.Printf("LocalAddr: %v\n", s.LocalAddr().String())
		fmt.Printf("RemoteAddr:%v\n", s.RemoteAddr().String())
		fmt.Printf("resp:\n%v\n", string(resp))
	}
	return n, err

}
func (s *Oconn) Write(request []byte) (n int, err error) {
	if s.Rewrite {
		//fmt.Printf("remote write ip name:%s %v\n", s.Remote, s.Name)
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
	if s.IsOut && n > 0 {
		req := make([]byte, n)
		copy(req, request)
		//fmt.Printf("LocalAddr: %v\n", conn.LocalAddr().String())
		//fmt.Printf("RemoteAddr:%v\n", conn.RemoteAddr().String())

		fmt.Printf("RemoteAddr:%v\n", s.RemoteAddr().String())
		fmt.Printf("req:\n%v\n", string(req))
	}

	return n, err
}
