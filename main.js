const app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    // image: './assets/vmSocks-green-onWhite.jpg',
    selectedVariant: 0,
    altText: 'A pair of socks',
    // inventory: 0,
    // inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0,
      },
    ],
    cart: 0,
    // styleObject: {
    //   color: 'red',
    //   fontSize: '13px',
    // },
    // styleObject2: {
    //   margin: '5px',
    //   padding: '20px',
    // },
    // activeClass: true,
    // errorClass: false,
    // classObject: {
    //   active: true,
    //   'text-danger': false,
    // },
    // activeClassArray: 'active',
    // errorClassArray: 'text-danger',
    // isActive: true,
    // activeClass: 'active',
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  },
});
