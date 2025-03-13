module mihomo-test

go 1.23.2

require (
	github.com/docker/docker v20.10.21+incompatible
	github.com/docker/go-connections v0.4.0
	github.com/metacubex/mihomo v1.19.0
	github.com/miekg/dns v1.1.63
	github.com/stretchr/testify v1.10.0
	golang.org/x/net v0.35.0
)

replace github.com/metacubex/mihomo => ../

require (
	github.com/3andne/restls-client-go v0.1.6 // indirect
	github.com/Microsoft/go-winio v0.6.0 // indirect
	github.com/RyuaNerin/go-krypto v1.2.4 // indirect
	github.com/Yawning/aez v0.0.0-20211027044916-e49e68abd344 // indirect
	github.com/andybalholm/brotli v1.1.0 // indirect
	github.com/apernet/hysteria/core/v2 v2.6.0 // indirect
	github.com/apernet/hysteria/extras/v2 v2.6.0 // indirect
	github.com/apernet/quic-go v0.48.2-0.20241104191913-cb103fcecfe7 // indirect
	github.com/bahlo/generic-list-go v0.2.0 // indirect
	github.com/buger/jsonparser v1.1.1 // indirect
	github.com/cloudflare/circl v1.3.9 // indirect
	github.com/coreos/go-iptables v0.8.0 // indirect
	github.com/davecgh/go-spew v1.1.2-0.20180830191138-d8f796af33cc // indirect
	github.com/distribution/reference v0.5.0 // indirect
	github.com/dlclark/regexp2 v1.11.5 // indirect
	github.com/docker/distribution v2.8.3+incompatible // indirect
	github.com/docker/go-units v0.4.0 // indirect
	github.com/ebitengine/purego v0.8.2 // indirect
	github.com/enfein/mieru/v3 v3.12.0 // indirect
	github.com/ericlagergren/aegis v0.0.0-20230312195928-b4ce538b56f9 // indirect
	github.com/ericlagergren/polyval v0.0.0-20220411101811-e25bc10ba391 // indirect
	github.com/ericlagergren/siv v0.0.0-20220507050439-0b757b3aa5f1 // indirect
	github.com/ericlagergren/subtle v0.0.0-20220507045147-890d697da010 // indirect
	github.com/fsnotify/fsnotify v1.8.0 // indirect
	github.com/gaukas/godicttls v0.0.4 // indirect
	github.com/go-ole/go-ole v1.3.0 // indirect
	github.com/go-task/slim-sprig/v3 v3.0.0 // indirect
	github.com/gobwas/httphead v0.1.0 // indirect
	github.com/gobwas/pool v0.2.1 // indirect
	github.com/gobwas/ws v1.4.0 // indirect
	github.com/gofrs/uuid/v5 v5.3.1 // indirect
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/google/btree v1.1.3 // indirect
	github.com/google/go-cmp v0.6.0 // indirect
	github.com/google/pprof v0.0.0-20241210010833-40e02aabc2ad // indirect
	github.com/google/uuid v1.6.0 // indirect
	github.com/hashicorp/golang-lru/v2 v2.0.5 // indirect
	github.com/hashicorp/hcl v1.0.0 // indirect
	github.com/hashicorp/yamux v0.1.2 // indirect
	github.com/insomniacslk/dhcp v0.0.0-20250109001534-8abf58130905 // indirect
	github.com/josharian/native v1.1.0 // indirect
	github.com/klauspost/compress v1.17.9 // indirect
	github.com/klauspost/cpuid/v2 v2.2.9 // indirect
	github.com/lufia/plan9stats v0.0.0-20240909124753-873cd0166683 // indirect
	github.com/lunixbochs/struc v0.0.0-20200707160740-784aaebc1d40 // indirect
	github.com/magiconair/properties v1.8.7 // indirect
	github.com/mailru/easyjson v0.7.7 // indirect
	github.com/mdlayher/netlink v1.7.2 // indirect
	github.com/mdlayher/socket v0.5.1 // indirect
	github.com/mdp/qrterminal/v3 v3.2.0 // indirect
	github.com/metacubex/amneziawg-go v0.0.0-20240922133038-fdf3a4d5a4ab // indirect
	github.com/metacubex/bbolt v0.0.0-20240822011022-aed6d4850399 // indirect
	github.com/metacubex/chacha v0.1.1 // indirect
	github.com/metacubex/gopacket v1.1.20-0.20230608035415-7e2f98a3e759 // indirect
	github.com/metacubex/gvisor v0.0.0-20241126021258-5b028898cc5a // indirect
	github.com/metacubex/quic-go v0.49.1-0.20250212162123-c135a4412996 // indirect
	github.com/metacubex/randv2 v0.2.0 // indirect
	github.com/metacubex/reality v0.0.0-20250219003814-74e8d7850629 // indirect
	github.com/metacubex/sing-quic v0.0.0-20250119013740-2a19cce83925 // indirect
	github.com/metacubex/sing-shadowsocks v0.2.8 // indirect
	github.com/metacubex/sing-shadowsocks2 v0.2.2 // indirect
	github.com/metacubex/sing-tun v0.4.6-0.20250312042506-6d3b4dc05c04 // indirect
	github.com/metacubex/sing-vmess v0.1.14-0.20250228002636-abc39e113b82 // indirect
	github.com/metacubex/sing-wireguard v0.0.0-20241126021510-0827d417b589 // indirect
	github.com/metacubex/tfo-go v0.0.0-20241231083714-66613d49c422 // indirect
	github.com/metacubex/utls v1.6.6 // indirect
	github.com/metacubex/wireguard-go v0.0.0-20240922131502-c182e7471181 // indirect
	github.com/mitchellh/mapstructure v1.5.0 // indirect
	github.com/moby/term v0.5.0 // indirect
	github.com/morikuni/aec v1.0.0 // indirect
	github.com/mroth/weightedrand/v2 v2.1.0 // indirect
	github.com/oasisprotocol/deoxysii v0.0.0-20220228165953-2091330c22b7 // indirect
	github.com/onsi/ginkgo/v2 v2.22.1 // indirect
	github.com/openacid/low v0.1.21 // indirect
	github.com/opencontainers/go-digest v1.0.0 // indirect
	github.com/opencontainers/image-spec v1.0.2 // indirect
	github.com/oschwald/maxminddb-golang v1.12.0 // indirect
	github.com/patrickmn/go-cache v2.1.0+incompatible // indirect
	github.com/pelletier/go-toml/v2 v2.2.2 // indirect
	github.com/pierrec/lz4/v4 v4.1.22 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/pmezard/go-difflib v1.0.1-0.20181226105442-5d4384ee4fb2 // indirect
	github.com/power-devops/perfstat v0.0.0-20240221224432-82ca36839d55 // indirect
	github.com/puzpuzpuz/xsync/v3 v3.5.1 // indirect
	github.com/quic-go/qpack v0.5.1 // indirect
	github.com/quic-go/qtls-go1-20 v0.4.1 // indirect
	github.com/sagernet/fswatch v0.1.1 // indirect
	github.com/sagernet/netlink v0.0.0-20240612041022-b9a21c07ac6a // indirect
	github.com/sagernet/nftables v0.3.0-beta.4 // indirect
	github.com/sagernet/sing v0.5.2 // indirect
	github.com/sagernet/sing-mux v0.2.1 // indirect
	github.com/sagernet/sing-shadowtls v0.1.5 // indirect
	github.com/sagernet/smux v0.0.0-20231208180855-7041f6ea79e7 // indirect
	github.com/sagikazarmark/locafero v0.4.0 // indirect
	github.com/sagikazarmark/slog-shim v0.1.0 // indirect
	github.com/samber/lo v1.49.1 // indirect
	github.com/shirou/gopsutil/v4 v4.25.1 // indirect
	github.com/sina-ghaderi/poly1305 v0.0.0-20220724002748-c5926b03988b // indirect
	github.com/sina-ghaderi/rabaead v0.0.0-20220730151906-ab6e06b96e8c // indirect
	github.com/sina-ghaderi/rabbitio v0.0.0-20220730151941-9ce26f4f872e // indirect
	github.com/sirupsen/logrus v1.9.3 // indirect
	github.com/sourcegraph/conc v0.3.0 // indirect
	github.com/spf13/afero v1.11.0 // indirect
	github.com/spf13/cast v1.6.0 // indirect
	github.com/spf13/pflag v1.0.5 // indirect
	github.com/spf13/viper v1.19.0 // indirect
	github.com/sqkam/hysteriaclient v0.0.0-20241226151332-15b099afe0da // indirect
	github.com/stretchr/objx v0.5.2 // indirect
	github.com/subosito/gotenv v1.6.0 // indirect
	github.com/tklauser/go-sysconf v0.3.14 // indirect
	github.com/tklauser/numcpus v0.9.0 // indirect
	github.com/txthinking/runnergroup v0.0.0-20210608031112-152c7c4432bf // indirect
	github.com/txthinking/socks5 v0.0.0-20230325130024-4230056ae301 // indirect
	github.com/u-root/uio v0.0.0-20240224005618-d2acac8f3701 // indirect
	github.com/vishvananda/netns v0.0.4 // indirect
	github.com/vmihailenco/msgpack/v5 v5.4.1 // indirect
	github.com/vmihailenco/tagparser/v2 v2.0.0 // indirect
	github.com/wk8/go-ordered-map/v2 v2.1.8 // indirect
	github.com/yusufpapurcu/wmi v1.2.4 // indirect
	gitlab.com/go-extension/aes-ccm v0.0.0-20230221065045-e58665ef23c7 // indirect
	gitlab.com/yawning/bsaes.git v0.0.0-20190805113838-0a714cd429ec // indirect
	go.uber.org/mock v0.5.0 // indirect
	go.uber.org/multierr v1.10.0 // indirect
	go.uber.org/zap v1.27.0 // indirect
	go4.org/netipx v0.0.0-20231129151722-fdeea329fbba // indirect
	golang.org/x/crypto v0.33.0 // indirect
	golang.org/x/exp v0.0.0-20241217172543-b2144cdd0a67 // indirect
	golang.org/x/mod v0.22.0 // indirect
	golang.org/x/sync v0.11.0 // indirect
	golang.org/x/sys v0.30.0 // indirect
	golang.org/x/term v0.29.0 // indirect
	golang.org/x/text v0.22.0 // indirect
	golang.org/x/time v0.7.0 // indirect
	golang.org/x/tools v0.28.0 // indirect
	google.golang.org/protobuf v1.36.1 // indirect
	gopkg.in/ini.v1 v1.67.0 // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
	gotest.tools/v3 v3.5.2 // indirect
	lukechampine.com/blake3 v1.3.0 // indirect
	rsc.io/qr v0.2.0 // indirect
)
