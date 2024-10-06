package global

import (
	"github.com/metacubex/mihomo/replacer"
	"sync"
)

var Replacers []replacer.Replacer
var ReWriteResp bool
var ReWriteReq bool
var AddrReqMap sync.Map
var AddrRespMap sync.Map

func InitReplacer() {

	Replacers = append(Replacers, replacer.NewDefaultReplacer(
		[]byte("mrpcs-android-l.flag_int3.data"),
		[]byte("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"),
	))

	Replacers = append(Replacers, replacer.NewDefaultReplacer(
		[]byte("mrpcs-android-l.ha.data"),
		[]byte("kkkkkkkkkkkkkkkkkkkkkkk"),
	))

	Replacers = append(Replacers, replacer.NewDefaultReplacer(
		[]byte("mrpcs-android-l.gr_925.data"),
		[]byte("kkkkkkkkkkkkkkkkkkkkkkkkkkk"),
	))
	Replacers = append(Replacers, replacer.NewDefaultReplacer(
		[]byte("mrpcs-android-l.hw.data"),
		[]byte("kkkkkkkkkkkkkkkkkkkkkkk"),
	))

	Replacers = append(Replacers, replacer.NewDefaultReplacer(
		[]byte("unzipmrpcs.data"),
		[]byte("kkkkkkkkkkkkkkk"),
	))

	Replacers = append(Replacers, replacer.NewDefaultReplacer(
		[]byte("mrpcs-android-l"),
		[]byte("kkkkkkkkkkkkkkk"),
	))
	//global.Replacers = append(global.Replacers, replacer.NewDefaultReplacer(
	//	[]byte("AAAAA"),
	//	[]byte("BBBBB"),
	//))
	//global.Replacers = append(global.Replacers, replacer.NewDefaultReplacer(
	//	[]byte("kk"),
	//	[]byte("gg"),
	//))

}
