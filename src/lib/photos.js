export const categories = [
  "All",
  "Nature",
  "Architecture",
  "Travel",
  "Portraits",
  "Still life",
];

export const photos = [
  {
    id: 1,
    title: "Where the land breathes",
    creator: "Maya Chen",
    category: "Nature",
    location: "Dolomites, Italy",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/5]",
    description:
      "A quiet mountain morning, where the peaks and their reflections meet in still water.",
  },
  {
    id: 2,
    title: "Quiet geometry",
    creator: "Theo Laurent",
    category: "Architecture",
    location: "Copenhagen, Denmark",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/3]",
    description:
      "An architectural study in clean lines, open space, and the changing Scandinavian light.",
  },
  {
    id: 3,
    title: "A softer kind of blue",
    creator: "Lena Okafor",
    category: "Travel",
    location: "Amalfi Coast, Italy",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/5]",
    description:
      "A coastal view of sunlit houses and deep blue water along the Amalfi shoreline.",
  },
  {
    id: 4,
    title: "Morning, unhurried",
    creator: "Nico Williams",
    category: "Still life",
    location: "Lisbon, Portugal",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/3]",
    description:
      "Soft morning light settles over a small, simple arrangement of flowers.",
  },
  {
    id: 5,
    title: "The long way home",
    creator: "Amara James",
    category: "Travel",
    location: "Iceland",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/5]",
    description:
      "A winding journey through Iceland's wide-open landscapes and distant mountains.",
  },
  {
    id: 6,
    title: "Lines in the light",
    creator: "Theo Laurent",
    category: "Architecture",
    location: "Oslo, Norway",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/3]",
    description:
      "A close look at the shapes and shadows that give a city building its character.",
  },
  {
    id: 7,
    title: "A little wild",
    creator: "Maya Chen",
    category: "Nature",
    location: "Yosemite, California",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/5]",
    description:
      "Open country and distant peaks invite a slower look at the natural world.",
  },
  {
    id: 8,
    title: "The in-between",
    creator: "Lena Okafor",
    category: "Portraits",
    location: "Accra, Ghana",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/3]",
    description:
      "A portrait that finds its story in a quiet expression and a moment of pause.",
  },
  {
    id: 9,
    title: "Salt on the air",
    creator: "Amara James",
    category: "Travel",
    location: "Big Sur, California",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/5]",
    description:
      "The Pacific meets the shoreline in a study of movement, sea spray, and open air.",
  },
  {
    id: 10,
    title: "Everyday rituals",
    creator: "Nico Williams",
    category: "Still life",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/3]",
    description:
      "A still-life moment inspired by the quiet details of an everyday ritual.",
  },
  {
    id: 11,
    title: "After the rain",
    creator: "Maya Chen",
    category: "Nature",
    location: "Mount Rainier, Washington",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/5]",
    description:
      "A fresh view of the landscape beneath the open sky after a passing shower.",
  },
  {
    id: 12,
    title: "A room of her own",
    creator: "Lena Okafor",
    category: "Portraits",
    location: "Marrakech, Morocco",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
    shape: "aspect-[4/3]",
    description:
      "A considered portrait, framed around presence, character, and a sense of place.",
  },
];

export function getPhotoById(id) {
  return photos.find((photo) => String(photo.id) === id);
}
