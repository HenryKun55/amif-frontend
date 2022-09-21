import { Button } from '../Form/Button'
import * as S from './styles'

export const Navigation = () => {
  return (
    <S.Navigation>
      <S.Link to="/">
        <S.LogoImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAC+CAMAAAC8qkWvAAABDlBMVEX///8ARWVioTdAdIxKii5cmzVfnjZIiC6/0NhOjjDf6OyfucUQUW9JiS7v8/Vgi59DgyxWlTMxciUqayMgXHgvcCU+fio2dycwaIJ/orI/fyrP3OI1dievxc9wl6lTkjGPrbtQf5WJuWkmZyGw0Jvy9vEgYh9KikPY580ZXFpYiVd2rVDE3LSTvnY3eUsGS2ISVlyBtV2NvG1omV1QhUtgnD+sxavg7Nnr8+ZWlj0rbVHM3MmaupONsoZHgza/07t/qHd8qG2ryKJZkkZJgkA5djJ1pWKOtn1vo1egvJ6Tu34/eD1olWaCsmeixo251aeCp4FNiFsfYk0fYGIMUV8xb2N7o3hqnmtLg25hlXT+/TskAAAHCElEQVR4nO2ca1vaSBTHpegKKMilgtQLyE0UwSveQFuL7bq1uttua3e//xfZmVxICEnOSSYw8+xzfi/6og7JfyZzZv7n5LKwQBAEQRAEQRAEQRAEQRAEQRAEQRCipBJuZGTLwrBZjsfcKcuWBpPw0s54K1scRMpHPGNFtj5/tld91cfisgX6suIvnpGSLdEHWH1sR7ZGbzaBmcNZVXft3IDVKxy8ZYz62IZsmR5kEFOHsylbqDuIuNVYky3UnbdI+TElgzeBVR+rypbqxhpavorGJ4VWH4ttyxY7DW7V1NmVLXYadOBylDM+2FVTR7msxd/lO1mVLddBkMDlKGZ8dgLKVytrwdodC6WMT7DA5ShlfFBGfwKVsha83bFQKHjxdsdCHeOTCaE+FkvIlm0SxO5YKBO8geyOhSLGZzucelWMz25I+WoEb1C7Y6FE1hLU7lgoYXwC2x0LBYI3uN2xUKBcG9zuWMg3PpsC6hUwPmHsjoXscm04u2MhOWupCsqXbHxC2h0LqcEb1u5YVGXK34XUgVuyTOMD250U2EGJWQuYp+zCm7LEci1od1YQbaQZH3BkeSkT3NekZS1gWZav6qCrkFWuhe2OtqeCW4Mk4wNOC31RBONbTtYCl2WrWjvE6ipDPmx3DFmoEJk74Jw2V3R4gZJgfOCyrFlIgGeZhOAFA3cV33T+xgcOSCsPhy/U3I0PXJa1JVJgmMw9eEFF9jQW7uucgxeu7lRtreGZNmfjA9+FzgRqPt/g5cO5sVsuGw9WV8trccfqOGnj4Ys113JttTy9VqS27Q9eT8qB6ylKlGsz22v6VXC6YLiapUC5VkPrgbP4CpckFCjXGmRWNqaqZ+BCO+espTkY3p6dlTjFu7Oz2+Gg6dccvokxP+PTfP/hYYtR0inqvBvdf7zy+gm89M+rXPv+Vz6f39qy9JvyGdnR7aX7r+D7APMo1zaHD+t5H/mM0dDtGsBL/+yNT3P4aX0dks+4H0z9FFFKn7XxueDiMfKXlz8fOn8ML/3VmYq/OisU0PKXl0eOKwAv/TM1PhefCjb5eVA+uwLtiQPA9wJmmLW8Fgp4+br+9OLv9r0AXvpnVq5tHhTCyF+8/mgdA/H0wIyMT/O8EE7+YvKzuYqmEvDsmU3WMlYfQn7yuqEfJFOGHx+YSfA2z+sC8pPJR2MjTsFr5yyMz3k9vHxNf/LFCGHghcaZZC2vdWH5ycf3xsH8XiflRB68f9TDyU/b5SeTz6aV8+9A1MZnUAfllzDyK5Uv5hqU8ImBiMu1zae6Xf+EfEN0NvsOJb/Sb5i7WGrHcxWKNni/1t3kl4rZNBdUqeQ0lpZylUoyuZz1lW/vAEso3eVHmrUM6lPy88XsoiUoZ+rX+S1XSaa95edyVgfYJXDdx6I0Pk9O+aWsU9CkfM6bpVzSSz7ji5XNbO5MX4MIg/eiNSF/61067aporF+Xz2Fd8Gz8bEsGUitrji5EF7yf7PJL2pRYTIPD/8aEdcGjcf9lIiVOrJTX4vH46lv2z05kOe9Fy5JfMuYzevh1eDC4t+28eCT1Blf+f0bwNJaft22lAYbfvAgV97b97p/uGpvtl86Jb90IwaBlyC8U/VZD/+Ef98Cjbb/WOGzbShOX7caXE/YLYfULfxnytxxOJvDw69OId8G7bafG6Ixbd4XV87nT4kNvT2HDDr/ZA1xX3zSExS9ctbh8rt5pJMMNv60LQNPrNqwO5ILLLzgrCN7DvwQP/7gLvvJ7R1EYnyEffJcCSFps+M0umDj/sHccjfH5ytSXpgs46WX70h9u+L3Z29d23gi2roNWa6uYve70O51O7/jm5qkY6fD7iI/E+By0CtnOCYPJP9IO+mP/5smeg0c8/E/7Y98TQdZy0BqdGHyzOaof33t3gHMIM/yjmyO7b6uKy6+f1Az5fztM7RG7DLBvxnPdO3acQbzi83rHN0Ku/tE1Lzr+3nsIvnVNs3fzYxZZy3BUq+kd+OkqX2Of9UFg9uz19j0OLBy8g9Hpqab/+cjjFCYspO+f+8GGf2mv9905YyYQrvg8nJ5qHfjmdxYd7a5su91oPD/3geHv1LqNw5/QiERQrn091ai5TU0Hk/fEL9u8J4wXffoxwZxD9t9GC8RLpsLBe/Woyf8FnyrwLol5U1DY+Hzodpl8n8A1Ce5REJ+lEC7XNruMe8RAVQMfGvOynXDwXjL5/yBOFHyLx3zZQfwhk3a3iwjcMLfUEO+rRWB82v/Cpwn1JBfm4wgRZC2IGAv3KA7ilS/xrAWzwoWbo5jvCwgbH8y70OFSI8zAiBofzAIR9hJjvkgkGLyY5bmq4LENMO9Chx0hzJUVMz6Y1S38cxSYV5WFnq6txmHCrw4JxNEV+ZQGQRAEQRAEQRAEQRAEQRAEQRDE/4P/AMBdEFPhldKbAAAAAElFTkSuQmCC" />
      </S.Link>
      <S.List>
        <S.ListItem>
          <S.Link to="/">Início</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/">Eventos</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/">Missões</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/">Torne-se um associado</S.Link>
        </S.ListItem>
        <S.Link to="/">
          <Button>Doe</Button>
        </S.Link>
      </S.List>
    </S.Navigation>
  )
}
