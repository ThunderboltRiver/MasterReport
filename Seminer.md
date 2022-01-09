# The summary of HB thesis from chapter 5 to 7

## 0.Preparation

### Definition 0.1 単体写像が定める連続写像

$\phi:K \longrightarrow L$を単体写像とする.この時,多面体 $|K|, |L|$ の間の連続写像$ \bar \phi: |K| \longrightarrow |L|$を次のように定義する.; $\sigma = |a_0, \cdots, a_k| \in K$とその点$x \in \sigma$に対して$x = \lambda_0 a_0 +  \cdots +  \lambda_k a_k (\sum_{i = 0}^{k} \lambda_i = 1, \ \lambda_i \geq 0 ( i = 1, \cdots, k))$なら
$$\bar \phi (x) := \lambda_0 \phi(a_0) + \cdots + \lambda_k \phi(a_k)$$
集合$\{\phi(a_0), \cdots, \phi(a_k)\}$は$L$の単体の頂点集合であり,$\sum_{i = 0}^{k} \lambda_i  = 1, \ \lambda_i \geq 0 ( i = 1, \cdots, k)$であるから,$\bar \phi(x)$は確かに$L$の単体の点となっている.$\bar \phi$を **$\phi$が定める連続写像という**.

### Example 0.2

$K \subset L$となる二つの単体複体に対しては,単体写像として包含写像$\iota:K \longrightarrow L$を取ることができるが,同時に多面体としても$|K| \subset |L|$を満たす.$\bar \iota (x) = x$であるから,$\bar \iota$は多面体の間の包含写像である.

以下では鎖群は$\mathbb{Z}_2$係数であるとする.

### Definition 0. 3 鎖準同型

二つの単体複体$K, L$に対する鎖群$C_q(K), C_q(L) (q \in \mathbb{Z})$の間に準同型写像の族$f_q: C_q(K) \longrightarrow C_q(L) (q \in \mathbb{Z})$が存在して
$$f_{q - 1} \circ \partial_q =\partial_{q}' \circ f_q $$
を満たすとき,$\{f_q\}_{q \in \mathbb{Z}}$を**鎖準同型**という.\
ただしここで$\partial_q$は$K$の$q$次の境界準同型を,$\partial_{q}'$は$L$の$q$次の境界準同型を表している.

### Example 0.4

単体写像$\phi: K  \longrightarrow L$に対して写像$\hat \phi_q: C_q(K) \longrightarrow C_q(L) (q \in \mathbb{Z})$を,$0 \leq q \leq \dim K$に対しては
$$\hat \phi_q (\langle a_0, \cdots, a_q \rangle ) = \begin{cases} \langle \phi(a_0) ,\cdots, \phi(a_q) \rangle & \# \{\phi(a_0) ,\cdots, \phi(a_q)\} = q \\ \boldsymbol{0} & else \end{cases}$$
を満たす準同型として,それ以外の$q \in \mathbb{Z}$に対しては$\boldsymbol{0}$と定義する.この時$\{\hat \phi_q\}$は鎖準同型となる.\
$Proof)q \leq 0$の時と$q > \dim K$の時は明らかに求める等式は成り立つ.よって$\hat \phi_{q - 1}(\partial_q(\langle a_0, \cdots,a_q\rangle)) =\partial_{q}'(\hat \phi_q (\langle a_0, \cdots,a_q\rangle))$を任意の$0 \leq q \leq \dim K$に対して示せば良い.\
$case 1;$
頂点$\phi(a_0) ,\cdots, \phi(a_q)$の内で同じものがあるとし,それを$\phi(a_i) = \phi(a_j) ( i < j)$とする.このとき$\hat \phi_q(\langle a_0, \cdots,a_q\rangle) = \boldsymbol{0}$だから右辺は$\boldsymbol{0}$になる.左辺は
$$\hat \phi_{q - 1} (\partial_q(\langle a_0, \cdots,a_q\rangle)) = \sum_{k = 0}^{q}\hat \phi_{q - 1}(\langle a_0, \cdots, a_{k - 1}, a_{k + 1}, \cdots, a_q\rangle )$$
において$k \ne i, j$の時は$\phi(a_i) = \phi(a_j)$より,$\hat \phi_q(\langle a_0, \cdots, a_{k - 1}, a_{k + 1}, \cdots, a_q\rangle ) = 0$であり,$k = i, j$の項だけが残る.$(i, j)$以外の組$(s, t)$で$\phi(a_s) = \phi(a_t)$となるものがあれば$i$の項も$j$の項も両方とも$0$になる.そのような組がないなら最終的に
$$\hat \phi_{q - 1} (\partial_q(\langle a_0, \cdots,a_q\rangle)) = \langle \phi(a_0), \cdots, \phi(a_{i - 1}), \phi(a_{i + 1}), \cdots, \phi(a_q) \rangle + \langle \phi(a_0), \cdots, \phi(a_{j - 1}), \phi(a_{j + 1}), \cdots, \phi(a_q) \rangle$$
となるが$\phi(a_i) = \phi(a_j) ( i < j)$より,この二つの項は一致している. 従って結局左辺も$0$となって求める等式が成り立つ.\
$case 2$;頂点$\phi(a_0) ,\cdots, \phi(a_q)$が全て異なる時は
$$\hat \phi_{q - 1} (\partial_q(\langle a_0, \cdots,a_q\rangle)) = \sum_{k = 0}^{q}\hat \phi_{q - 1}(\langle a_0, \cdots, a_{k - 1}, a_{k + 1}, \cdots, a_q\rangle ) \\ =  \sum_{k = 0}^{q}\langle \phi(a_0), \cdots, \phi(a_{k - 1}), \phi(a_{k + 1}), \cdots, \phi(a_q) \rangle \\ = \partial_q'(\langle \phi(a_0), \cdots, \phi(a_q) \rangle ) \\ = \partial_q'(\hat \phi_q (\langle a_0, \cdots, a_q \rangle ))$$
と計算できる.よってこの時も求める等式が成り立つ.\
以上のことから$\{\hat \phi_q\}$は鎖準同型である.$\square$

### Definition 0.5 鎖準同型から定まるホモロジー群の準同型

$f_q: C_q(K) \longrightarrow C_q(L) (q \in \mathbb{Z})$を鎖準同型とする.$z \in \ker \partial_q$とするとき,$\partial_q'(f_q(z)) = f_{q - 1}(\partial_q(z)) = f_{q - 1}(\boldsymbol{0}) = \boldsymbol{0}$となるから
$$z \in \ker \partial_q  \Longrightarrow f_q(z) \in \ker \partial_q' $$
が任意の$q \in \mathbb{Z}$で成り立つ.\
また$z,z' \in \ker \partial_q $がホモローグ,つまり$z - z' \in Im \ \partial_{q + 1}$であるとする.この時$f_q (z) - f_q(z') \in f_q(Im \ \partial_{q + 1})$となるが $f_q(Im \ \partial_{q + 1}) = Im \ f_q \circ \partial_{q + 1}  = Im \ \partial_{q + 1}' \circ f_{q + 1}  = \partial_{q + 1}'(Im \ f_{q + 1}) \subset Im \ \partial_{q + 1}'$ であるから
$$z - z' \in Im \ \partial_q \Longrightarrow f_q(z) - f_q(z') \in Im \ \partial_{q + 1}'$$
が任意の$q \in \mathbb{Z}$で成り立つ.\
以上の結果から,ホモロジー群の間の準同型写像$(f_q)_* : H_q(K) \longrightarrow H_q(K)$が
$$(f_q)_* ([z]) := [f_q(z)]$$
で矛盾なく定義される.準同型$\{(f_q)_*\}$を**鎖準同型$\{f_q\}$から定まるホモロジー群の準同型**という.

### Example 0.6

Example 0.4 の鎖準同型$\{\hat \phi_q\}$から定まるホモロジー群の準同型$\{(\hat \phi_q)_*\}$を, **単体写像$\phi$から定まるホモロジー群の準同型** という.

### Definition 0.7 双対鎖準同型

鎖準同型$f_q:C_q(K) \longrightarrow C_q(L)$に対して,双対鎖群の間の準同型$f_q^{\#}: C^q(L) \longrightarrow C^q(K)$を以下で定義する.
$$f_q^{\#}(c) := c \circ f_q \ \ (c \in C^q(L) )$$
$\{f_q^{\#}\}$を$\{f_q\}$から引き起こされた双対鎖準同型という.

### Proposition 0.8

$\delta_q, \delta_q'$をそれぞれ$C^q(K), C^q(L)$の双対境界準同型とする.この時Definition 0.7 の双対鎖準同型は以下の性質を持つ.
$$(i) \delta_q \circ f_q^\# = f_{q + 1}^{\#} \circ \delta_q ' \\ (ii) z \in \ker \delta_q ' \Longrightarrow f_q^\#(z) \in \ker \delta_q \\ (iii) z - z' \in Im \ \delta_q' (z,z' \in \ker  \delta_{q + 1}) \Longrightarrow f_{q + 1}^{\#}(z) - f_{q + 1}^{\#}(z') \in Im \ \delta_q$$
$Proof)(i);\partial_q, \partial_q'$をそれぞれ鎖群$C_q(K), C_q(L)$の境界準同型$c \in C^q(L)$ とする. $\delta_q(f_q^\# (c)) = f_q^\# (c) \circ \partial_{q + 1} = (c \circ f_q) \circ \partial_{q + 1} = c \circ (f_q \circ \partial_{q + 1})$ここで鎖準同型の性質$f_q \circ \partial_{q + 1} = \partial_{q + 1}' \circ f_{q + 1}$を用いることで$c \circ (f_q \circ \partial_{q + 1}) = c \circ (\partial_{q + 1}' \circ f_{q + 1}) = (c \circ \partial_{q + 1}') \circ f_{q + 1} = f_{q + 1}^\# (c \circ \partial_{q + 1}') = f_{q + 1}^\# (\delta_{q}'(c))$がわかる.従って$\delta_q(f_q^\# (c)) = f_{q + 1}^\# (\delta_{q}'(c))$となるから$(i)$が成り立つ.
$(ii);z \in \ker \delta_q'$とすると$(i)$より$\delta_q(f_q^{\#}(z)) = f_{q + 1}^{\#}( \delta_q '(z))) = f_{q + 1}^{\#}(\boldsymbol{0}) = \boldsymbol{0}$.よって$f_q^\#(z) \in \ker \delta_q$がわかる.\
$(iii); z - z' \in Im \ \delta_q' (z,z' \in \ker  \delta_{q + 1})$であるとする.$f_{q + 1}^{\#}(z) - f_{q + 1}^{\#}(z) = f_{q + 1}^{\#}(z - z')\in f_{q + 1}^{\#}(Im \ \delta_q') $であるが,$(i)$によって$f_{q + 1}^{\#}(Im \ \delta_q') = Im \ f_{q + 1}^{\#} \circ \delta_q' = Im \ \delta_q \circ \ f_{q}^{\#} = \delta_q(Im \ f_{q + 1}^{\#})\subset Im \ \delta_q$となるから結果的に$f_{q + 1}^{\#}(z) - f_{q + 1}^{\#}(z') \in Im \ \delta_q$が成り立つ.$\square$

### Definition 0.9 双対鎖準同型から定まるコホモロジー群の準同型

Proposition 0.8の$(ii), (iii)$により双対鎖準同型$f_{q}^{\#}:C^q(L) \longrightarrow C^q(K)$はコホモロジー類を保つことがわかる.従ってコホモロジー群の間の準同型$f_q^*:H^q(L) \longrightarrow H^q(K)$が
$$f_q^*([z]) := [f_q^{\#}(z)]$$
で矛盾なく定義される.$\{f_q^*\}$を**双対鎖準同型$\{f^{\#}_q\}$から定まるコホモロジー群の準同型**という.

### Example 0.10

Example 0.4によって単体写像$\phi: K \longrightarrow L$から鎖準同型$\hat \phi_q$を定義したが,$\hat \phi_q$の双対鎖準同型から定まるコホモロジー群の準同型$\hat \phi_q^{*}:H^q(L) \longrightarrow H^q(K)$を,**単体写像$\phi: K \longrightarrow L$から誘導されるコホモロジー群の準同型**と言い,単に$\phi_q^{*}:H^q(L) \longrightarrow H^q(K)$あるいは$\phi^*:H^q(L) \longrightarrow H^q(K)$とも書く.

以降では,鎖群の元を$c$と表し,特に境界準同型の核の元を表すのに$z$を用いる.双対鎖群の元は特に断りが無い場合は$f$と表すことにする.

### Definition 0.11 相対ホモロジー群

$K$を複体として$L \subset K$を部分複体とする.このとき鎖群$C_q(K),C_q(L)$は$C_q(L) \subset C_q(K)$を満たす.そこで$q$次元相対鎖群$C_q(K, L)$を
$$C_q(K, L) := C_q(K) / C_q(L)$$
とおく.
$\partial_q: C_q(K) \longrightarrow C_{q - 1}(K)$を境界準同型とすると$\partial_q(C_q(L)) \subset C_{q - 1}(L)$であるから
$$c - c' \in C_q(L) (c , c' \in C_q(K)) \Longrightarrow \partial_q(c) - \partial(c') \in C_{q - 1}(L)$$
が成り立つ.従って相対鎖群の間の境界準同型$\partial_q^*:C_q(K, L) \longrightarrow C_{q - 1}(K, L)$が
$$\partial_q^*([c]) := [\partial_q(c)]$$
として矛盾なく定義される.\
$\partial_{q + 1} \circ \partial_q = \boldsymbol{0}$より$\partial_{q + 1}^* \circ \partial_q^*= \boldsymbol{0}$であるから,鎖群のときと同様に
$$Im \partial_{q + 1}^*\subset  \ker  \partial_q^* $$
が成り立つ.
$$H_q(K, L) : = \ker  \partial_q^*/Im \partial_{q + 1}^*$$
としたものを **$q$次元相対ホモロジー群** という.
今,$\pi_p:C_p(K) \longrightarrow C_p(K, L)$を標準的な射影とすると$\partial_q^*$の定義から
$$\partial^*_q \circ \pi_q = \pi_{q - 1} \circ \partial_q$$
が成り立つ.つまり$\{\pi_q\}$は二つの鎖群$C_q(K)$と$C_q(K, L)$の間の鎖準同型となる.従って$\{\pi_q\}$はホモロジー群の間の準同型
$$(\pi_q)_*:H_q(K) \longrightarrow H_q(K, L)$$
とコホモロジー群の間の準同型
$$(\pi_q)^*:H^q(K, L) \longrightarrow H^q(K)$$
を誘導する.ここで$(\pi_q)_*([z]) = [\pi_q(z)]$であり,$(\pi_q)^*([f]) = [ f \circ \pi_q]$である.

### Definition 0.12 相対コホモロジー群

相対鎖群$C_q(K, L)$から$\mathbb{Z_2}$への準同型写像全体の集合を$C^q(K, L)$と書く.$\partial_q^*:C_q(K, L) \longrightarrow C_{q - 1}(K, L)$を相対鎖群の境界準同型とするとき,その双対境界準同型$\delta_q^*:C^q(K, L) \longrightarrow C^{q + 1}(K, L)$を
$$\delta_q^*(f) : = f \circ \partial_{q + 1}^* \ \ \ (f \in C^q(K, L))$$
で定義する.$\partial_q^*\circ \partial_{q + 1}^* = \boldsymbol{0}$であるから,$\delta_{q} ^* \circ \delta_{q - 1}^*= \boldsymbol{0}$である.つまり
$$Im \ \delta_{q - 1}^* \subset \ker  \delta_{q}^*$$
が成り立つ.そこで相対コホモロジー群$H^q(K, L)$を
$$H^q(K, L) := \ker  \delta_{q}^*/ Im \delta_{q - 1}^*$$
で定義する.

### Theorem 0.13

相対コホモロジー群$H^q(K, L)$は相対ホモロジー群の双対$\hom(H_q(K, L), \mathbb{Z}_2)$と同型である.

$proof)$二つの準同型$\phi:H^q(K, L) \longrightarrow \hom(H_q(K, L), \mathbb{Z}_2)$と$\psi:\hom(H_q(K, L), \mathbb{Z}_2)\longrightarrow H^q(K, L)$を構成して$\psi \circ \phi$と$\phi \circ \psi$が共に恒等写像であることを示す.

- $\phi$の構成
コホモロジー類$[f] \in H^q(K, L)$に対して$\phi([f]) \in \hom(H_q(K, L), \mathbb{Z}_2)$を次で定義する.
$$\phi([f])([z]) :=  f(z)$$
この$\phi([f])$は見かけ上代表元の取り方に依存しているため,$\phi([f])$がホモロジー群から$\mathbb{Z}_2$への写像として矛盾なく定義されるには,
$$f \sim g , z \sim z' \ (f, g \in \ker  \delta_{q}^*, z, z' \in \ker  \partial_q^*) \Longrightarrow f(z) = g(z')$$
となることを確認する必要がある.ところがこれは,それぞれの同値関係の定義から$f - g = \delta_{q - 1}^* (h), z - z' = \partial_{q + 1}^*(c) \ (h \in C^{q - 1} (K, L), c \in C_{q + 1}(K, L))$とおくと
$$f(z) - g(z') = (f(z) - g(z)) +( g(z) - g(z')) \\ = (f - g)(z) + g(z - z') \\ = \delta_{q - 1}^* (h)(z) + g(\partial_{q + 1}^*(c)) \\ = h(\partial_q^*(z)) + \delta_q^*(g)(c) \\ = \boldsymbol{0}$$
が得られることから明らかである.従って$\phi([f])$は$f$の同値類によってのみ決定される写像$\phi([f]):H_q(K, L) \longrightarrow \mathbb{Z}_2$であり,定義から明らかに$[z] \in H_q(K, L)$に関して準同型であるから$\phi([f]) \in \hom(H_q(K, L), \mathbb{Z}_2)$が確かにわかる.また
$$\phi([f + g]) = \phi([f]) + \phi([g])$$
であることも$\phi([f])$の定義から確認できる.\
以上によって準同型写像$\phi:H^q(K, L) \longrightarrow \hom(H_q(K, L), \mathbb{Z}_2)$が構成された.
- $\psi$の構成
$C_q(K, L)$はベクトル空間であるから,ある部分空間$W$によって
$$C_q(K, L) = \ker  \partial_q^* \oplus W$$
と直和分解できる.ここで$W$は境界$\partial_q^*:C_q(K, L) \longrightarrow C_{q - 1}(K, L)$に準同型定理を適用することで同型写像
$$\eta :W \ni w \mapsto \eta(w) = \partial_q^*(w) \in  Im \partial_q^*$$
を得る.そこで$F \in \hom(H_q(K, L), \mathbb{Z}_2)$に対して,写像$h_F:C_q(K, L) \longrightarrow \mathbb{Z}_2$を,$c = z + w \in C_q(K, L) \ (z \in \ker  \partial_q^*, w \in W)$に対して
$$ h_F(c) := F([z])$$
と定義する.$h_F$は$c \in C_q(K, L)$に関して準同型であるから$h_F \in C^q(K, L)$であり,特に$c \in C_{q + 1}(K, L)$とすると$\partial_{q + 1}^*(c) \in \ker \partial_q^*$と$[\partial_{q + 1}^*(c)] = \boldsymbol{0}$より
$$\delta_q^*(h_F)(c) = h_F (\partial_{q +1}^*(c)) = F([\partial_{q +1}^*(c)]) = F(\boldsymbol{0}) = \boldsymbol{0}$$
となるから$\delta_q^*(h_F) = \boldsymbol{0}$つまり$h_F \in \ker \delta_q^*$となる.そこで目的の写像$\psi:\hom(H_q(K, L), \mathbb{Z}_2)\longrightarrow H^q(K, L)$を
$$\psi(F) := [h_F]$$
で定義する.$h_F$の定義から明らかに$\psi$は$F \in \hom(H_q(K, L), \mathbb{Z}_2)$に関して準同型である.
- $\psi \circ \phi$が恒等写像であること
$[f] \in H^q(K, L)$とする.$\psi \circ \phi ([f]) = [h_{\phi([f])}]$に注意すると,$f \sim h_{\phi([f])}$を示せば良い.$c = z + w \in C_q(K, L) \ (z \in \ker  \partial_q^*, w \in W)$とすると
$$f(c) - h_{\phi([f])}(c) = f(c) - \phi([f])([z]) \\ = f(c) - f(z) \\ = f(c - z) \\ = f(w) \\ = f \circ \eta^{-1} \circ \eta(w) \\ = f \circ \eta^{-1}(\partial_q^*(w)) \ \ (\because \eta(w) = \partial_q^*(w)) \\ = f \circ \eta^{-1}(\partial_q^*(c)) \ \ (\because \partial_q^*(c) = \partial_q^*(w)) \\ = f^*(\partial_q^*(c)) \ \ (\because f^*|_{Im \partial_q^*} = f \circ \eta^{-1}) \\ =\delta_{q - 1}^*(f^*)(c)$$
従って$f - h_{\phi([f])} = \delta_q^*(f^*)$となる.ただし,ここで準同型$f^*:C_{q - 1}(K, L) \longrightarrow \mathbb{Z}_2$は,準同型$f \circ \eta^{-1}:Im \partial_q^* \longrightarrow \mathbb{Z}_2$を直和分解$C_q(K, L) = Im \partial_q^*\oplus V$に対して,$f^*|_{Im \partial_q^*} = f \circ \eta^{-1}, f^*(V) = \boldsymbol{0}$と拡張したものとしている.\
以上の式変形によって$f \sim h_{\phi([f])}$が成り立つ.

- $\phi \circ \psi$が恒等写像であること
$F \in \hom(H_q(K, L), \mathbb{Z}_2)$とする.$\phi \circ \psi(F) = \phi([h_F])$より$\phi([h_F]) = F$を示せば良い.$[z] \in H_q(K, L)$に対して$\phi([h_F])([z]) = h_F(z) = F([z])$だから確かに$\phi([h_F]) = F$が成り立つ.

以上の議論から題意が示された.$\square$

### Definition 0.14 相対コホモロジーの元と積

以下では$H^q(K) = \hom(H_q(K), \mathbb{Z}_2),H^q(K, L) = \hom(H_q(K, L), \mathbb{Z}_2)$と見做す.この意味でコホモロジー類を$[f]$ではなく単純に$f$と書くことにする.
$f \in H^p(K, L)$ $g \in H^q(K)$とすると$f \circ (\pi_q)_*\in H^p(K)$であるから,カップ積$f \smile g \in H^{p + q}(K, L)$を
$$f \smile g := (f \circ (\pi_p)_* ) \smile g) \circ (\pi_{p + q})_*$$
で定義する.ただし,右辺のカップ積は通常のコホモロジー群$H^q(K)$でのカップ積である.また,$[z] \in H_{p + q}(K, L)$とのキャップ積を$f \in H^p(K, L)$のときは
$$ h([z] \frown f) := f \smile h([z]) \ \ \forall h \in H^q(K)$$
となる$[z] \frown f \in H_q(K)$として定義する.
$f \in H^p(K)$のときは
$$ h([z] \frown f) := h \smile f([z]) \ \ \forall h \in H^q(K, L)$$
なる$[z] \frown f \in H_q(K, L)$とする.

### Definition 0.15 境界を持つ多様体

上半空間$\mathbb{H}^n:= \{(x_1, \cdots, x_n) \in \mathbb{R}^n | x_n \geq 0\}$を$\mathbb{R}^n$の部分位相空間とみなす.
$M$が **$n$次元境界付き位相多様体** であるとは,第二可算公理を満たすハウスドルフ空間であって, $M$の各点が上半空間のある開集合と同相になるような開近傍を持つことをいう.\
$p \in M$の開近傍$U$から,$\mathbb{H}^n$の開集合$V$への同相写像を$\phi : U \longrightarrow V$とするとき,対$(U, \phi)$を$p$の**チャート**という.\
また$p \in M$が$M$の**境界点**であるとは,$p$のあるチャート$(U, \phi)$で$\phi(p)$の第$n$成分が$0$であるものが存在することをいう.$M$の境界点全体を$\partial M$と書く.

### Theorem 0.16 Lefschetz双対

$M$を境界をもつ$n$次元ホモロジー多様体とする.$[M]_2 \in H_n(M, \partial M)$を基本ホモロジー類とするとき,これとのキャップ積で与えられる二つの写像は同型である.
$$\phi:H^k(M, \partial M) \ni [z] \longrightarrow [M]_2 \frown [z] \in H_{n - k}(M) \\ \psi: H^{n - k}(M) \ni [z] \longrightarrow [M]_2 \frown [z] \in H_{k}(M, \partial M) $$

## Chapter 5

位相空間のフィルトレーション
$$\emptyset = X_0 \subset X_1 \subset \cdots \subset X_n = X$$
を近似する単体複体のフィルトレーション
$$\emptyset = K_0 \subset K_1 \subset \cdots \subset K_n = K$$
を考える.包含写像$\psi_{j, i}: K_i \longrightarrow K_{j} \ (i \leq j)$はホモロジー群の間の準同型
$$(\psi_{j, i})_*:H_q(K_i) \longrightarrow H_q(K_j)$$
とホモロジー群の間の準同型
$$(\psi_{j, i})^*:H^q(K_j) \longrightarrow H^q(K_i)$$
を誘導する.
特に$i = j+ 1, j = 0, \cdots , n$まで考えることでホモロジー群の系列

$$\boldsymbol{0} = H_q(K_0) \longrightarrow H_q(K_1) \longrightarrow \cdots \longrightarrow H_q(K_n)$$
とコホモロジー群の系列
$$\boldsymbol{0} = H^q(K_0) \longleftarrow H^q(K_1) \longleftarrow \cdots \longleftarrow H^q(K_n)$$
を得る.

### Definition 5.1

上記のホモロジー群の系列を**パーシステントホモロジー**といい,コホモロジー群の系列を**パーシステントコホモロジー**という.

### Definition 5.2

$q$次元のホモロジー類$\gamma$が$K_i$で**誕生する**とは$\gamma \in H_q(K_i) - Im \ (\psi_{i, i - 1})_*$を満たすことであり,それが$K_j$で**消滅する**とは$j = \min \{0 \leq k \leq n| (\psi_{k,k - 1})_*(\gamma) = \boldsymbol{0} \}$を満たすことである.またこのとき区間
$$I = [i, \ j)$$
は$\gamma$の存続する区間を表す.これを**パーシステント区間**という.ただし,$\gamma$が$K_n$でも消滅しない場合は$j = \infty$とおくことにする.パーシステント区間が有界である場合,
$$pers(\gamma) = j - i$$
は$\gamma$の存続する期間を表している.これを$\gamma$の$persistence$と呼ぶことにする.

### Definition 5.3

$q$次元のコホモロジー類 $\Gamma$ が $K_j$ で**誕生する**とは$\Gamma \in H^q(K_j) - Im \ (\psi_{j+ 1, j})^*$を満たすことであり,それが$K_i$で**消滅する**とは$i = \max \{kx| \exists \Lambda \in H^q(K_{j + 1})\ s.t. \  (\psi_{j + 1, k})^*(\Lambda) = \psi_{j, k}^q(\Gamma) \}$を満たすことである.またこの時$copers (\Gamma) = j - i$を$\Gamma$の$co persistence $という.

## Chapter 6

フィルトレーション
$$\emptyset = X_0 \subset X_1 \subset \cdots \subset X_n = X$$
の各$X_i$が弧状連結な$n$次元ホモロジー多様体であると仮定し,$\partial X_i$をDefinition0.15の意味での境界とする.このときTheorem 0.14より$H^q(X_i)$は$H_{n - q}(X_i,\partial X_i)$に同型である.従ってパーシステントコホモロジー
$$\boldsymbol{0} = H^q(X_0) \longleftarrow H^q(X_1) \longleftarrow \cdots \longleftarrow H^q(X_n)$$
のLefschetz双対として相対ホモロジーの系列
$$\boldsymbol{0} = H_{n - q}(X_0, \partial X_0) \longrightarrow H_{n - q} (X_1, \partial X_1) \longrightarrow \cdots \longrightarrow H_{n - q}(X_n, \partial X_n) = H_{n - q}(X, \partial X)$$
を得る.
