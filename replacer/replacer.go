package replacer

import (
	"errors"
	"regexp"
)

type Replacer interface {
	Replace(src []byte) (buf []byte, err error, replaceSrc []byte, srcPackage []byte)
}
type DefaultReplacer struct {
	Src  []byte
	Dest []byte
	r    *regexp.Regexp
}

var (
	ErrNotFound = errors.New("not found")
)

func NewDefaultReplacer(src []byte, dest []byte) *DefaultReplacer {
	r := regexp.MustCompile(hex2String(src))

	return &DefaultReplacer{Src: src, Dest: dest, r: r}
}

func (d *DefaultReplacer) Replace(src []byte) (buf []byte, err error, replaceSrc []byte, srcPackage []byte) {
	local := d.r.FindIndex(src)
	if local == nil {
		return src, ErrNotFound, nil, nil
	}

	replaceSrc = src[local[0]:local[1]]
	replaceDest := make([]byte, 0, len(replaceSrc))

	for i, v := range d.Dest {
		if v == 0x0 {
			replaceDest = append(replaceDest, replaceSrc[i])
		} else {

			replaceDest = append(replaceDest, v)
		}
	}
	bs := make([]byte, 0, len(src))
	bs = append(bs, src[:local[0]]...)

	bs = append(bs, replaceDest...)

	bs = append(bs, src[local[1]:]...)
	return bs, nil, replaceSrc, src

}

func hex2String(bytes []byte) string {
	bs := make([]byte, 0, len(bytes)*2)
	for _, v := range bytes {
		if v == 0x0 {
			bs = append(bs, 0x2e)
			continue
		}
		if v == 0x2e {
			bs = append(bs, 0x5c)
		}
		bs = append(bs, v)
	}
	return string(bs)
}
