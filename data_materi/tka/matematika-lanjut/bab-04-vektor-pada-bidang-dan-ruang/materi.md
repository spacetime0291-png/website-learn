# Vektor pada Bidang dan Ruang
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

## A. Komponen dan Operasi Vektor
1. **Representasi Vektor:**
   * Di bidang $\mathbb{R}^2$: $\vec{u} = \begin{pmatrix} x \\ y \end{pmatrix} = x\hat{i} + y\hat{j}$
   * Di ruang $\mathbb{R}^3$: $\vec{u} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} = x\hat{i} + y\hat{j} + z\hat{k}$
2. **Panjang (Modulus) Vektor:**
   $$|\vec{u}| = \sqrt{x^2 + y^2 + z^2}$$
   * Vektor satuan: $\hat{u} = \frac{\vec{u}}{|\vec{u}|}$ (memiliki panjang 1 satuan).
3. **Operasi Aljabar:**
   $$\vec{u} \pm \vec{v} = (u_x \pm v_x)\hat{i} + (u_y \pm v_y)\hat{j} + (u_z \pm v_z)\hat{k}$$

---

## B. Perkalian Skalar (Dot Product) & Proyeksi
1. **Perkalian Titik (Dot Product):**
   $$\vec{u} \cdot \vec{v} = u_x v_x + u_y v_y + u_z v_z = |\vec{u}| |\vec{v}| \cos\theta$$
   * Jika $\vec{u} \perp \vec{v}$ (tegak lurus), maka $\theta = 90^\circ \implies \vec{u} \cdot \vec{v} = 0$.
   * Sudut antara dua vektor:
     $$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| |\vec{v}|}$$
2. **Proyeksi Ortogonal Vektor $\vec{u}$ pada $\vec{v}$:**
   * **Panjang Proyeksi Skalar:**
     $$|\vec{p}| = \frac{\vec{u} \cdot \vec{v}}{|\vec{v}|}$$
   * **Vektor Proyeksi:**
     $$\vec{p} = \left(\frac{\vec{u} \cdot \vec{v}}{|\vec{v}|^2}\right) \vec{v}$$