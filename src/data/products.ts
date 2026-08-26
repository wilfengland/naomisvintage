export type Category = 'clothing' | 'homeware'

export interface Product {
  id: number
  name: string
  category: Category
  era: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Cognac Leather Trench, 1978',
    category: 'clothing',
    era: 'Late 1970s',
    image: '/placeholder.png',
    description:
      "Found in an estate sale outside Lyon, this double-breasted trench has the kind of patina you can't fake — soft at the elbows, dark at the collar where decades of scarves sat. The lining is a faded plaid that's started to separate at one seam (easily mended). Belt included, buckle slightly pitted. One owner, by the look of the monogram stitched inside the left pocket.",
    shortDescription:
      'Double-breasted cognac leather, worn soft over forty-odd years. Belt included.',
    price: 214,
  },
  {
    id: 2,
    name: 'Hand-Painted Delft Milk Jug',
    category: 'homeware',
    era: 'Circa 1950s',
    image: '/placeholder.png',
    description:
      "A small windmill scene circles the body of this jug, painted by hand rather than transferred — you can see the brush hesitate near the handle. There's a faint hairline crack near the base that doesn't affect its use, just its resale to purists. Holds about two cups. Marked underneath with a maker's stamp we haven't been able to fully identify.",
    shortDescription:
      'Hand-painted windmill scene, small hairline crack near the base, still watertight.',
    price: 38,
  },
  {
    id: 3,
    name: 'Herringbone Wool Waistcoat',
    category: 'clothing',
    era: 'Early 1960s',
    image: '/placeholder.png',
    description:
      "Five buttons, a single interior pocket, and a back strap that still cinches properly. The wool has that dense, slightly scratchy quality mills stopped bothering with sometime in the eighties. Reworked lining, done by a tailor in Leeds we trust with pieces like this. Fits close — this one runs true to a 38 chest.",
    shortDescription:
      'Dense herringbone wool, five-button front, relined by a Leeds tailor.',
    price: 76,
  },
  {
    id: 4,
    name: 'Cut Crystal Decanter Set',
    category: 'homeware',
    era: '1930s',
    image: '/placeholder.png',
    description:
      'A decanter and four matching glasses, each cut with the same starburst pattern along the base. One glass has a chip small enough to ignore unless you go looking for it. The stopper still seats with a satisfying click — most from this period have warped. Comes wrapped in the newspaper we found it in, a Belfast paper from 1974, which we\'ll include if you want it.',
    shortDescription:
      'Decanter plus four glasses, matching starburst cut, one glass lightly chipped.',
    price: 92,
  },
  {
    id: 5,
    name: 'Chunky Cable-Knit Fisherman Sweater',
    category: 'clothing',
    era: 'Late 1980s',
    image: '/placeholder.png',
    description:
      "Cream wool gone slightly grey with age, the kind of sweater that gets heavier the longer you wear it in the rain. Cable pattern is uneven in places, evidence it was knitted by hand rather than machine. A small moth mark near the left cuff, mended with visible darning thread that only adds to it. Oversized fit, roughly a men's large.",
    shortDescription:
      'Hand-knitted cream cable-knit, visibly mended cuff, oversized fit.',
    price: 54,
  },
  {
    id: 6,
    name: 'Brass Table Lamp with Pleated Shade',
    category: 'homeware',
    era: '1960s',
    image: '/placeholder.png',
    description:
      'Solid brass base with a nice weight to it, rewired last month with a new cord and socket so it\'s safe to plug in immediately. The pleated fabric shade has yellowed unevenly, which honestly suits it. Switch is the twist kind on the cord rather than the base — a little inconvenient, but original.',
    shortDescription:
      'Solid brass base, recently rewired, original pleated shade with age spotting.',
    price: 61,
  },
  {
    id: 7,
    name: 'Pleated Tartan Wool Skirt',
    category: 'clothing',
    era: 'Mid 1970s',
    image: '/placeholder.png',
    description:
      "Box pleats all the way around, a red and forest green tartan that's held its color better than most. Side zip, one small snag near the waistband that's barely noticeable once worn. This kind of skirt was made to survive school runs for a decade, and it shows — sturdy stitching throughout, no thinning at the seat.",
    shortDescription:
      'Box-pleated tartan wool, side zip, one small snag near the waistband.',
    price: 47,
  },
  {
    id: 8,
    name: 'Stoneware Storage Crock, Unmarked',
    category: 'homeware',
    era: 'Early 1900s',
    image: '/placeholder.png',
    description:
      "No maker's mark, no lid, a bit of surface crazing on the glaze — everything you'd expect from something this old that was actually used rather than displayed. Likely made for pickling or storing flour. Two small chips on the rim, both stable. Heavy for its size; this thing isn't going anywhere once it's on a shelf.",
    shortDescription:
      'Unmarked stoneware, glaze crazing throughout, two stable rim chips.',
    price: 29,
  },
]

export default products
