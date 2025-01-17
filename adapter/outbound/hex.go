package outbound

func encodeToString(src []byte) string {
	dst := make([]byte, encodedLen(len(src)))
	encode(dst, src)
	return string(dst)
}

const (
	hextable = "0123456789abcdef"
)

func encode(dst, src []byte) int {
	j := 0
	for _, v := range src {
		dst[j] = hextable[v>>4]
		dst[j+1] = hextable[v&0x0f]
		dst[j+2] = 32 //  " "
		j += 3
	}
	return len(src) * 2
}
func encodedLen(n int) int { return n * 3 }

type BitInfo struct {
	Value    byte
	Position int64 // 使用int64代替long
}

func (s *BitInfo) GetBit(index int) bool {
	return (s.Value & (1 << index)) != 0
}

func (s *BitInfo) SetBit(index int, value bool) {
	if value {
		s.Value |= (1 << index)
	} else {
		s.Value &^= (1 << index) // 使用 &^= 简化代码
	}
}

func (s *BitInfo) String() string {
	result := ""
	for i := 7; i >= 0; i-- {
		if s.GetBit(i) {
			result += "1"
		} else {
			result += "0"
		}
	}
	return result
}
