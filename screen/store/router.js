var router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Products",
      component: LandingPageTemplate
    },
    {
      path: "/content/:contentId",
      name: "content",
      component: WikiPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPageTemplate
    },
    {
      path: "/product/:productId",
      name: "Product",
      component: ProductPageTemplate
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckOutPageTemplate
    },
    {
      path: "/checkout/:orderId",
      name: "successcheckout",
      component: SuccessCheckOutTemplate
    },
    {
      path: "/orders/:orderId",
      name: "order",
      component: CustomerOrderPageTemplate
    },
    {
      path: "/orders",
      name: "orders",
      component: CustomerOrdersPageTemplate
    },
    {
      path: "/deals/:categoryId",
      name: "deals",
      component: DealsPageTemplate
    },
    {
      path: "/account",
      name: "account",
      component: AccountPageTemplate
    }
  ]
});
