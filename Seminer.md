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
$$\hat \phi_q (\langle a_0, \cdots, a_q \rangle ) = \begin{cases} \langle \phi(a_0) ,\cdots, \phi(a_q) \rangle & \# \{\phi(a_0) ,\cdots, \phi(a_q)\} = q \\ 0 & else \end{cases}$$
を満たす準同型として,それ以外の$q \in \mathbb{Z}$に対しては$\boldsymbol{0}$と定義する.この時$\{\hat \phi_q\}$は鎖準同型となる.\
$Proof)q \leq 0$の時と$q > \dim K$の時は明らかに求める等式は成り立つ.よって$\hat \phi_{q - 1}(\partial_q(\langle a_0, \cdots,a_q\rangle)) =\partial_{q}'(\hat \phi_q (\langle a_0, \cdots,a_q\rangle))$を任意の$0 \leq q \leq \dim K$に対して示せば良い.\
$case 1;$
頂点$\phi(a_0) ,\cdots, \phi(a_q)$の内で同じものがあるとし,それを$\phi(a_i) = \phi(a_j) ( i < j)$とする.このとき$\hat \phi_q(\langle a_0, \cdots,a_q\rangle) = 0$だから右辺は0になる.左辺は
$$\hat \phi_{q - 1} (\partial_q(\langle a_0, \cdots,a_q\rangle)) = \sum_{k = 0}^{q}\hat \phi_{q - 1}(\langle a_0, \cdots, a_{k - 1}, a_{k + 1}, \cdots, a_q\rangle )$$
において$k \ne i, j$の時は$\phi(a_i) = \phi(a_j)$より,$\hat \phi_q(\langle a_0, \cdots, a_{k - 1}, a_{k + 1}, \cdots, a_q\rangle ) = 0$であり,$k = i, j$の項だけが残る.$(i, j)$以外の組$(s, t)$で$\phi(a_s) = \phi(a_t)$となるものがあれば$i$の項も$j$の項も両方とも$0$になる.そのような組がないなら最終的に
$$\hat \phi_{q - 1} (\partial_q(\langle a_0, \cdots,a_q\rangle)) = \langle \phi(a_0), \cdots, \phi(a_{i - 1}), \phi(a_{i + 1}), \cdots, \phi(a_q) \rangle + \langle \phi(a_0), \cdots, \phi(a_{j - 1}), \phi(a_{j + 1}), \cdots, \phi(a_q) \rangle$$
となるが$\phi(a_i) = \phi(a_j) ( i < j)$より,この二つの項は一致している. 従って結局左辺も$0$となって求める等式が成り立つ.\
$case 2$;頂点$\phi(a_0) ,\cdots, \phi(a_q)$が全て異なる時は
$$\hat \phi_{q - 1} (\partial_q(\langle a_0, \cdots,a_q\rangle)) = \sum_{k = 0}^{q}\hat \phi_{q - 1}(\langle a_0, \cdots, a_{k - 1}, a_{k + 1}, \cdots, a_q\rangle ) \\ =  \sum_{k = 0}^{q}\langle \phi(a_0), \cdots, \phi(a_{k - 1}), \phi(a_{k + 1}), \cdots, \phi(a_q) \rangle \\ = \partial_q'(\langle \phi(a_0), \cdots, \phi(a_q) \rangle ) \\ = \partial_q'(\hat \phi_q (\langle a_0, \cdots, a_q \rangle ))$$
と計算できる.よってこの時も求める等式が成り立つ.\
以上のことから$\{\hat \phi_q\}$は鎖準同型である.$\square$

### Example 0.6

Example 0.4 の鎖準同型$\{\hat \phi_q\}$から定まるホモロジー群の準同型$\{(\hat \phi_q)_*\}$を, **単体写像$\phi$から定まるホモロジー群の準同型** といい,$\{(\phi_q)_* \}$と書く.

### Definition 0.7 双対鎖準同型

鎖準同型$f_q:C_q(K) \longrightarrow C_q(L)$に対して,双対鎖群の間の準同型$f_q^{\#}: C^q(L) \longrightarrow C^q(K)$を以下で定義する.
$$f_q^{\#}(c) := c \circ f_q \ \ (c \in C^q(L) )$$
$\{f_q^{\#}\}$を$\{f_q\}$から引き起こされた双対鎖準同型という.

### Proposition 0.8

$\delta_q, \delta_q'$をそれぞれ$C^q(K), C^q(L)$の双対境界準同型とする.この時Definition 0.7 の双対鎖準同型は以下の性質を持つ.
$$(i) \delta_q \circ f_q^\# = f_{q + 1}^{\#} \circ \delta_q ' \\ (ii) z \in Ker \ \delta_q ' \Longrightarrow f_q^\#(z) \in Ker \ \delta_q \\ (iii) z - z' \in Im \ \delta_q' (z,z' \in Ker \delta_{q + 1}) \Longrightarrow f_{q + 1}^{\#}(z) - f_{q + 1}^{\#}(z') \in Im \ \delta_q$$
$Proof)(i);c \in C^q(L)$ と`する. $\delta_q(f_q^\# (c)) = f_q^\# (c) \circ \partial_{q + 1} = (c \circ f_q) \circ \partial_{q + 1} = c \circ (f_q \circ \partial_{q + 1})$ここで鎖準同型の性質$f_q \circ \partial_{q + 1} = \partial_{q + 1}' \circ f_{q + 1}$を用いることで$c \circ (f_q \circ \partial_{q + 1}) = c \circ (\partial_{q + 1}' \circ f_{q + 1}) = (c \circ \partial_{q + 1}') \circ f_{q + 1} = f_{q + 1}^\# (c \circ \partial_{q + 1}') = f_{q + 1}^\# (\delta_{q + 1}'(c))$がわかる.従って$\delta_q(f_q^\# (c)) = f_{q + 1}^\# (\delta_{q + 1}'(c))$となるから$(i)$が成り立つ.
$(ii);$

## Chapter 5

### 5.1 CoPersistence

位相空間のフィルトレーション
$$\emptyset = X_0 \subset X_1 \subset \cdots \subset X_n = X$$
を近似する単体複体のフィルトレーション
$$\emptyset = K_0 \subset K_1 \subset \cdots \subset K_n = K$$
があるとする.

#### Def 1.2
