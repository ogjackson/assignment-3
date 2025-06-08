const products = [
    {
        id: 'admiral',
        type: 'Recliner',
        name: 'Admiral',
        image: './assets/product-photos/admiral.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1750',
        sizes: ['2480w x 870h x 680d', '2280w x 870h x 680d', '2080w x 870h x 680d'],
        materials: ['Cream Italian Leather']
    },
    {
        id: 'premier',
        type: 'Recliner',
        name: 'Premier',
        image: './assets/product-photos/premier.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather, with soft, medium or firm seating foam.',
        price: '3150',
        sizes: ['3100w x 910h x 610d', '3000w x 910h x 610d', '2900w x 910h x 610d'],
        materials: ['Langham Saddle']
    },
    {
        id: 'president-2',
        type: 'Recliner',
        name: 'President II',
        image: './assets/product-photos/president-2.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1200',
        sizes: ['2080w x 870h x 680d', '2280w x 870h x 680d', '3100w x 910h x 610d'],
        materials: ['Alpaca Cacao']
    },
    {
        id: 'governor',
        type: 'Recliner',
        name: 'Governor',
        image: './assets/product-photos/governor.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '950',
        sizes: ['3000w x 910h x 610d', '2900w x 910h x 610d', '3100w x 910h x 610d'],
        materials: ['Eternal Umber']
    },
    {
        id: 'ambassador',
        type: 'Recliner',
        name: 'Ambassador',
        image: './assets/product-photos/ambassador.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1700',
        sizes: ['3100w x 910h x 610d', '2480w x 870h x 680d', '2900w x 910h x 610d'],
        materials: ['Epitome Bronze']
    },
    {
        id: 'arizona',
        type: 'Recliner',
        name: 'Arizona',
        image: './assets/product-photos/arizona.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1200',
        sizes: ['2480w x 870h x 680d', '3100w x 910h x 610d', '3000w x 910h x 610d'],
        materials: ['Epitome Bronze', 'Monarque Martini', 'Cream Italian Leather']
    },
    {
        id: 'new-hilton',
        type: 'Recliner',
        name: 'New Hilton',
        image: './assets/product-photos/new-hilton.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1300',
        sizes: ['3000w x 910h x 610d', '2900w x 910h x 610d', '2480w x 870h x 680d'],
        materials: ['Portofino Driftwood', 'Epitome Bronze', 'Monarque Martini']
    },
    {
        id: 'monte-carlo-sofa-bed',
        type: 'Sofa',
        name: 'Monte Carlo Sofa Bed',
        image: './assets/product-photos/monte-carlo-sofa-bed.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1900',
        sizes: ['2080w x 870h x 680d', '2900w x 910h x 610d', '2480w x 870h x 680d'],
        materials: ['Monarque Martini', 'Portofino Driftwood']
    },
    {
        id: 'monarch',
        type: 'Sofa',
        name: 'Monarch',
        image: './assets/product-photos/monarch.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '550',
        sizes: ['2080w x 870h x 680d', '3000w x 910h x 610d', '3100w x 910h x 610d'],
        materials: ['Epitome Bronze', 'Alpaca Cacao', 'Alpaca Bronze']
    },
    {
        id: 'cambridge',
        type: 'Sofa',
        name: 'Cambridge',
        image: './assets/product-photos/cambridge.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '650',
        sizes: ['3000w x 910h x 610d', '2280w x 870h x 680d', '2900w x 910h x 610d'],
        materials: ['Monarque Macaroon', 'Epitome Bronze']
    },
    {
        id: 'avoca',
        type: 'Sofa',
        name: 'Avoca',
        image: './assets/product-photos/avoca.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1300',
        sizes: ['2480w x 870h x 680d', '2280w x 870h x 680d', '3100w x 910h x 610d'],
        materials: ['Portofino Driftwood']
    },
    {
        id: 'gymea',
        type: 'Sofa',
        name: 'Gymea',
        image: './assets/product-photos/gymea.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1750',
        sizes: ['2280w x 870h x 680d', '3100w x 910h x 610d', '2900w x 910h x 610d'],
        materials: ['Langham Saddle', 'Monarque Macaroon']
    },
    {
        id: 'rolled-back-dining-chair',
        type: 'Dining Chair',
        name: 'Rolled Back Dining Chair',
        image: './assets/product-photos/rolled-back-dining-chair.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '600',
        sizes: ['3100w x 910h x 610d', '2480w x 870h x 680d', '3000w x 910h x 610d'],
        materials: ['Cream Italian Leather', 'Portofino Driftwood']
    },
    {
        id: 'straight-back-dining-chair',
        type: 'Dining Chair',
        name: 'Straight Back Dining Chair',
        image: './assets/product-photos/straight-back-dining-chair.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1750',
        sizes: ['2480w x 870h x 680d', '3000w x 910h x 610d', '2080w x 870h x 680d'],
        materials: ['Eternal Umber']
    },
    {
        id: 'ralphy-split-back-dining-chair',
        type: 'Dining Chair',
        name: 'Ralphy Split Back Dining Chair',
        image: './assets/product-photos/ralphy-split-back-dining-chair.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '1050',
        sizes: ['2900w x 910h x 610d', '2280w x 870h x 680d', '2080w x 870h x 680d'],
        materials: ['Epitome Bronze', 'Langham Saddle', 'Monarque Macaroon']
    }
];