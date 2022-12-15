var app = new Vue({
    el: "#app",
    data: {
      product: "Носки ",
      image: "socks.png",
      sostav: ["80% хлопок", "20% полиестр"],
      perks: [""],
      price: 280,
      countdown: 10,
      variants: [
        {
          variantId: 0,
          variantColor: "зеленый"
        },
        {
          variantId: 1,
          variantColor: "голубой"
        }
      ],
      varcurrent: 0,
      inventory: 13,
      sizes: ["S","M","L","XL","XXL"]
    },

    methods: {
      addToCart() {
        if (this.inventory > 0) {
          this.cart += 1;
          this.inventory -= 1;
        }
      }
    }
  });