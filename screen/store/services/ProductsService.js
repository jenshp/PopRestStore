var ProductService = {
  getFeaturedProducts() {
    return axios.get("/rest/s1/pop/categories/PopcAllProducts/products").then(res => {
      return res.data.productList;
    });
  },
  getProductsByCategory(categoryId) {
    return axios.get("/rest/s1/pop/categories/"+categoryId+"/products").then(res => {
      return res.data.productList;
    });
  },
  getCategoryInfoById(categoryId) {
    return axios.get("/rest/s1/pop/categories/"+categoryId+"/info").then(res => {
      return res.data;
    });
  },
  getCategories() {
    return axios.get("/rest/s1/pop/categories/PopcBrowseRoot/info").then(res => {
      return res.data.subCategoryList;
    });
  },
  getProduct(productId) {
    return axios.get("/rest/s1/pop/products/" + productId).then(res => {
      return res.data;
    });
  },
  addProductCart(product,headers) {
    return axios.post("/rest/s1/pop/cart/add",product,headers).then(res => {
      return res.data;
    });
  },
  getCartInfo(headers) {
    return axios.get("/rest/s1/pop/cart/info",headers).then(res => {
      return res.data;
    });
  },
  addCartBillingShipping(data,headers) {
    return axios.post("/rest/s1/pop/cart/billingShipping",data,headers).then(res => {
      return res.data;
    });
  },
  getCartShippingOptions(headers) {
    return axios.get("/rest/s1/pop/cart/shippingOptions", headers).then(res => {
      return res.data;
    });
  },
  setCartPlace(data,headers) {
    return axios.post("/rest/s1/pop/cart/place",data,headers).then(res => {
      return res.data;
    });
  }
};
