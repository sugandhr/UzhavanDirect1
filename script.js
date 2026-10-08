/**
 * Uzhavan Direct — Direct Farmer-to-Customer Fresh Produce Marketplace
 * Product Data & Image Mapping Engine
 */

(function () {
  "use strict";

  // ==========================================
  // 1. STRICT PRODUCT ↔ MEDIA MAPPING DICTIONARY
  // Every product has its own explicit local image & product-specific online fallback
  // ==========================================
  const PRODUCT_MEDIA_MAP = {
    veg_01: {
      image: "images/tomatoes.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80"
    },
    veg_02: {
      image: "images/sambar_onions.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80"
    },
    veg_03: {
      image: "images/sirukirai.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80"
    },
    veg_04: {
      image: "images/brinjal.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=600&q=80"
    },
    veg_05: {
      image: "images/bhendi.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"
    },
    veg_06: {
      image: "images/Drumstick.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    },
    stp_01: {
      image: "images/mappillai_rice.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
    },
    stp_02: {
      image: "images/barnyard_millet.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
    },
    stp_03: {
      image: "images/Ragi.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80"
    },
    frt_01: {
      image: "images/Tendercoconut.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=600&q=80"
    },
    frt_02: {
      image: "images/nendran_banana.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
    },
    dry_01: {
      image: "images/cow_milk.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80"
    },
    dry_02: {
      image: "images/sesame_oil.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
    },
    spc_01: {
      image: "images/karupatti.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80"
    },
    spc_02: {
      image: "images/turmeric.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"
    }
  };

  const DEFAULT_GENERIC_FALLBACK = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80";

  // Seed Catalog Data (Individual Customer Model)
  const INITIAL_PRODUCTS = [
    // Category 1: Fresh Vegetables
    {
      id: "veg_01",
      name: "Country Tomatoes (நாட்டு தக்காளி)",
      category: "vegetables",
      origin: "Selvaraj • Kinathukadavu, Coimbatore",
      unit: "kg",
      farmPrice: 28,
      marketPrice: 50,
      availableStock: 85,
      soldQuantity: 35,
      image: PRODUCT_MEDIA_MAP.veg_01.image,
      fallbackImage: PRODUCT_MEDIA_MAP.veg_01.fallbackImage
    },
    {
      id: "veg_02",
      name: "Small Sambar Onions (சின்ன வெங்காயம்)",
      category: "vegetables",
      origin: "Murugesan • Dharapuram Belt",
      unit: "kg",
      farmPrice: 52,
      marketPrice: 85,
      availableStock: 60,
      soldQuantity: 40,
      image: PRODUCT_MEDIA_MAP.veg_02.image,
      fallbackImage: PRODUCT_MEDIA_MAP.veg_02.fallbackImage
    },
    {
      id: "veg_03",
      name: "Sirukeerai Fresh Greens (சிறுகீரை)",
      category: "vegetables",
      origin: "Amirtham Organic Farm • Annur",
      unit: "bunch",
      farmPrice: 15,
      marketPrice: 28,
      availableStock: 50,
      soldQuantity: 30,
      image: PRODUCT_MEDIA_MAP.veg_03.image,
      fallbackImage: PRODUCT_MEDIA_MAP.veg_03.fallbackImage
    },
    {
      id: "veg_04",
      name: "Country Brinjal (நாட்டு கத்தரி)",
      category: "vegetables",
      origin: "Ganesan • Alandurai Village",
      unit: "kg",
      farmPrice: 32,
      marketPrice: 55,
      availableStock: 45,
      soldQuantity: 25,
      image: PRODUCT_MEDIA_MAP.veg_04.image,
      fallbackImage: PRODUCT_MEDIA_MAP.veg_04.fallbackImage
    },
    {
      id: "veg_05",
      name: "Native Okra / Bhendi (வெண்டைக்காய்)",
      category: "vegetables",
      origin: "Senthil • Thondamuthur",
      unit: "kg",
      farmPrice: 36,
      marketPrice: 60,
      availableStock: 40,
      soldQuantity: 20,
      image: PRODUCT_MEDIA_MAP.veg_05.image,
      fallbackImage: PRODUCT_MEDIA_MAP.veg_05.fallbackImage
    },
    {
      id: "veg_06",
      name: "Tender Drumsticks (நாட்டு முருங்கைக்காய்)",
      category: "vegetables",
      origin: "Palaniswamy • Karur Belt",
      unit: "kg",
      farmPrice: 45,
      marketPrice: 80,
      availableStock: 35,
      soldQuantity: 15,
      image: PRODUCT_MEDIA_MAP.veg_06.image,
      fallbackImage: PRODUCT_MEDIA_MAP.veg_06.fallbackImage
    },

    // Category 2: Heirloom Grains & Millets
    {
      id: "stp_01",
      name: "Traditional Mappillai Samba Rice",
      category: "staples",
      origin: "Kavitha Natural Farms • Thanjavur",
      unit: "kg",
      farmPrice: 85,
      marketPrice: 130,
      availableStock: 120,
      soldQuantity: 80,
      image: PRODUCT_MEDIA_MAP.stp_01.image,
      fallbackImage: PRODUCT_MEDIA_MAP.stp_01.fallbackImage
    },
    {
      id: "stp_02",
      name: "Barnyard Millet (குதிரைவாலி)",
      category: "staples",
      origin: "Dharmapuri Tribal Collective",
      unit: "kg",
      farmPrice: 65,
      marketPrice: 105,
      availableStock: 75,
      soldQuantity: 45,
      image: PRODUCT_MEDIA_MAP.stp_02.image,
      fallbackImage: PRODUCT_MEDIA_MAP.stp_02.fallbackImage
    },
    {
      id: "stp_03",
      name: "Native Ragi / Finger Millet (கேழ்வரகு)",
      category: "staples",
      origin: "Velusamy • Krishnagiri",
      unit: "kg",
      farmPrice: 42,
      marketPrice: 65,
      availableStock: 90,
      soldQuantity: 60,
      image: PRODUCT_MEDIA_MAP.stp_03.image,
      fallbackImage: PRODUCT_MEDIA_MAP.stp_03.fallbackImage
    },

    // Category 3: Native Fruits & Coconuts
    {
      id: "frt_01",
      name: "Aliyar Tender Coconuts (இளநீர்)",
      category: "fruits",
      origin: "Thangavel Groves • Pollachi",
      unit: "piece",
      farmPrice: 35,
      marketPrice: 55,
      availableStock: 110,
      soldQuantity: 90,
      image: PRODUCT_MEDIA_MAP.frt_01.image,
      fallbackImage: PRODUCT_MEDIA_MAP.frt_01.fallbackImage
    },
    {
      id: "frt_02",
      name: "Naturally Ripened Nendran Bananas",
      category: "fruits",
      origin: "Radhakrishnan • Mettupalayam",
      unit: "kg",
      farmPrice: 48,
      marketPrice: 75,
      availableStock: 65,
      soldQuantity: 35,
      image: PRODUCT_MEDIA_MAP.frt_02.image,
      fallbackImage: PRODUCT_MEDIA_MAP.frt_02.fallbackImage
    },

    // Category 4: Cold-Pressed Oils & Farm Dairy
    {
      id: "dry_01",
      name: "A2 Country Cow Raw Milk",
      category: "dairy",
      origin: "Gokulam Dairy Farm • Annur",
      unit: "litre",
      farmPrice: 48,
      marketPrice: 70,
      availableStock: 80,
      soldQuantity: 50,
      image: PRODUCT_MEDIA_MAP.dry_01.image,
      fallbackImage: PRODUCT_MEDIA_MAP.dry_01.fallbackImage
    },
    {
      id: "dry_02",
      name: "Cold-Pressed Wood Chekku Sesame Oil",
      category: "dairy",
      origin: "Vivasayi Grama Chekku • Kangeyam",
      unit: "litre",
      farmPrice: 340,
      marketPrice: 480,
      availableStock: 30,
      soldQuantity: 20,
      image: PRODUCT_MEDIA_MAP.dry_02.image,
      fallbackImage: PRODUCT_MEDIA_MAP.dry_02.fallbackImage
    },

    // Category 5: Native Spices & Natural Sweeteners
    {
      id: "spc_01",
      name: "Chemical-Free Palm Jaggery (பனங்கருப்பட்டி)",
      category: "spices",
      origin: "Tiruchendur Palmyrah Society",
      unit: "kg",
      farmPrice: 180,
      marketPrice: 260,
      availableStock: 40,
      soldQuantity: 25,
      image: PRODUCT_MEDIA_MAP.spc_01.image,
      fallbackImage: PRODUCT_MEDIA_MAP.spc_01.fallbackImage
    },
    {
      id: "spc_02",
      name: "Native Salem Finger Turmeric (விரலி மஞ்சள்)",
      category: "spices",
      origin: "Sundaram • Erode Belt",
      unit: "kg",
      farmPrice: 130,
      marketPrice: 210,
      availableStock: 35,
      soldQuantity: 15,
      image: PRODUCT_MEDIA_MAP.spc_02.image,
      fallbackImage: PRODUCT_MEDIA_MAP.spc_02.fallbackImage
    }
  ];

  const INITIAL_ORDERS = [
    {
      orderId: "UZH-8101",
      flat: "A-204",
      name: "Ramesh Kannan",
      mobile: "9842100123",
      itemsSummary: "Country Tomatoes (3 kg), Tender Coconuts (4 piece)",
      totalAmount: 224,
      collected: true,
      timestamp: "2026-10-07 18:30"
    },
    {
      orderId: "UZH-8102",
      flat: "B-102",
      name: "Dr. Revathi",
      mobile: "9443211890",
      itemsSummary: "Mappillai Samba Rice (5 kg), Small Sambar Onions (2 kg)",
      totalAmount: 529,
      collected: false,
      timestamp: "2026-10-07 19:15"
    }
  ];

  const CATEGORY_MAP = {
    all: { label: "All Produce", icon: "🥬" },
    vegetables: { label: "Fresh Vegetables", icon: "🍅" },
    staples: { label: "Heirloom Grains", icon: "🌾" },
    fruits: { label: "Native Fruits", icon: "🍌" },
    dairy: { label: "Oils & Farm Dairy", icon: "🥛" },
    spices: { label: "Spices & Sweeteners", icon: "🫚" }
  };

  // ==========================================
  // 2. STORAGE MANAGER WITH STRICT MEDIA MAPPING ENFORCEMENT
  // ==========================================
  class StorageManager {
    static STORAGE_KEYS = {
      PRODUCTS: "uzh_products_v5",
      ORDERS: "uzh_orders_v5"
    };

    static getProducts() {
      try {
        const stored = localStorage.getItem(this.STORAGE_KEYS.PRODUCTS);
        if (!stored) return INITIAL_PRODUCTS;
        const parsed = JSON.parse(stored);
        
        return parsed.map(item => {
          const media = PRODUCT_MEDIA_MAP[item.id];
          return {
            ...item,
            farmPrice: item.farmPrice || item.price || 30,
            marketPrice: item.marketPrice || Math.round((item.farmPrice || item.price || 30) * 1.5),
            availableStock: item.availableStock !== undefined ? item.availableStock : (item.targetQuota || 50),
            soldQuantity: item.soldQuantity || 0,
            image: media ? media.image : (item.image || DEFAULT_GENERIC_FALLBACK),
            fallbackImage: media ? media.fallbackImage : (item.fallbackImage || DEFAULT_GENERIC_FALLBACK)
          };
        });
      } catch (err) {
        console.warn("StorageManager: Failed reading products, using seed data", err);
        return INITIAL_PRODUCTS;
      }
    }

    static saveProducts(products) {
      try {
        localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
      } catch (err) {
        console.error("StorageManager: Failed saving products", err);
      }
    }

    static getOrders() {
      try {
        const stored = localStorage.getItem(this.STORAGE_KEYS.ORDERS);
        return stored ? JSON.parse(stored) : INITIAL_ORDERS;
      } catch (err) {
        console.warn("StorageManager: Failed reading orders, using seed data", err);
        return INITIAL_ORDERS;
      }
    }

    static saveOrders(orders) {
      try {
        localStorage.setItem(this.STORAGE_KEYS.ORDERS, JSON.stringify(orders));
      } catch (err) {
        console.error("StorageManager: Failed saving orders", err);
      }
    }
  }

  // ==========================================
  // 3. REACTIVE APP STATE STORE
  // ==========================================
  class AppStore {
    constructor() {
      this.products = StorageManager.getProducts();
      this.orders = StorageManager.getOrders();
      this.cart = {}; // { prodId: quantity }
      this.activeCategory = "all";
      this.searchQuery = "";
      this.gateSearchQuery = "";
      this.currentView = "marketplace";
      this.subscribers = [];
    }

    subscribe(callback) {
      this.subscribers.push(callback);
    }

    notify() {
      this.subscribers.forEach(cb => cb(this));
      StorageManager.saveProducts(this.products);
      StorageManager.saveOrders(this.orders);
    }

    // --- State Mutators ---
    setView(viewName) {
      this.currentView = viewName;
      this.notify();
    }

    setCategoryFilter(cat) {
      this.activeCategory = cat;
      this.notify();
    }

    setSearchQuery(query) {
      this.searchQuery = query.toLowerCase().trim();
      this.notify();
    }

    setGateSearchQuery(query) {
      this.gateSearchQuery = query.toLowerCase().trim();
      this.notify();
    }

    addToCart(prodId, qty = 1) {
      const prod = this.products.find(p => p.id === prodId);
      if (!prod || prod.availableStock <= 0) return;

      const currentQty = this.cart[prodId] || 0;
      const newQty = Math.min(prod.availableStock, currentQty + qty);
      if (newQty > currentQty) {
        this.cart[prodId] = newQty;
        this.notify();
      }
    }

    updateCartQty(prodId, delta) {
      const prod = this.products.find(p => p.id === prodId);
      if (!this.cart[prodId]) return;

      const newQty = this.cart[prodId] + delta;
      if (newQty <= 0) {
        delete this.cart[prodId];
      } else if (prod && newQty <= prod.availableStock) {
        this.cart[prodId] = newQty;
      } else if (prod && newQty > prod.availableStock) {
        this.cart[prodId] = prod.availableStock;
        alert(`Only ${prod.availableStock} ${prod.unit} available in stock.`);
      }
      this.notify();
    }

    clearCart() {
      this.cart = {};
      this.notify();
    }

    createOrder({ name, flat, mobile }) {
      const cartKeys = Object.keys(this.cart);
      if (cartKeys.length === 0) return null;

      const orderId = `UZH-${Math.floor(1000 + Math.random() * 9000)}`;
      let totalAmount = 0;
      let itemsSummaryArr = [];

      cartKeys.forEach(id => {
        const prod = this.products.find(p => p.id === id);
        if (prod) {
          const qty = Math.min(prod.availableStock, this.cart[id]);
          totalAmount += prod.farmPrice * qty;
          prod.availableStock = Math.max(0, prod.availableStock - qty);
          prod.soldQuantity = (prod.soldQuantity || 0) + qty;
          itemsSummaryArr.push(`${prod.name} (${qty} ${prod.unit})`);
        }
      });

      const newOrder = {
        orderId,
        flat,
        name,
        mobile,
        itemsSummary: itemsSummaryArr.join(", "),
        totalAmount,
        collected: false,
        timestamp: new Date().toLocaleString()
      };

      this.orders.unshift(newOrder);
      this.cart = {};
      this.notify();
      return newOrder;
    }

    toggleOrderCollection(orderId) {
      const target = this.orders.find(o => o.orderId === orderId);
      if (target) {
        target.collected = !target.collected;
        this.notify();
      }
    }

    addHarvestBatch(newBatch) {
      this.products.unshift(newBatch);
      this.notify();
    }

    // --- Computed Selectors ---
    getFilteredProducts() {
      return this.products.filter(item => {
        const matchesCat = this.activeCategory === "all" || item.category === this.activeCategory;
        const matchesSearch =
          item.name.toLowerCase().includes(this.searchQuery) ||
          item.origin.toLowerCase().includes(this.searchQuery);
        return matchesCat && matchesSearch;
      });
    }

    getCategoryCounts() {
      const counts = { all: this.products.length };
      Object.keys(CATEGORY_MAP).forEach(cat => {
        if (cat !== "all") {
          counts[cat] = this.products.filter(p => p.category === cat).length;
        }
      });
      return counts;
    }

    getCartSummary() {
      let totalItems = 0;
      let totalPrice = 0;
      let totalMarketPrice = 0;

      Object.keys(this.cart).forEach(id => {
        const prod = this.products.find(p => p.id === id);
        if (prod) {
          const qty = this.cart[id];
          totalItems += qty;
          totalPrice += prod.farmPrice * qty;
          totalMarketPrice += prod.marketPrice * qty;
        }
      });

      return {
        totalItems,
        totalPrice,
        totalMarketPrice,
        totalSavings: Math.max(0, totalMarketPrice - totalPrice)
      };
    }
  }

  // ==========================================
  // 4. UI ENGINE & DOM RENDERER
  // ==========================================
  class UIManager {
    constructor(store) {
      this.store = store;
      this.initDOMElements();
      this.bindEvents();
      this.store.subscribe(() => this.render());
      this.render();
      this.startTimers();
    }

    initDOMElements() {
      // Nav & Views
      this.navTabs = document.getElementById("navTabs");
      this.viewPanels = document.querySelectorAll(".view-panel");

      // Marketplace & Catalog
      this.catalogGrid = document.getElementById("catalogGrid");
      this.categoryFilterBar = document.getElementById("categoryFilterBar");
      this.searchInput = document.getElementById("searchInput");
      this.totalActiveBatches = document.getElementById("totalActiveBatches");
      this.avgSavingsStat = document.getElementById("avgSavingsStat");

      // Gate Pickup Desk
      this.gateTableBody = document.getElementById("gateTableBody");
      this.gateTableSearch = document.getElementById("gateTableSearch");
      this.gateOrdersCount = document.getElementById("gateOrdersCount");
      this.gateCollectedCount = document.getElementById("gateCollectedCount");
      this.gatePendingCount = document.getElementById("gatePendingCount");
      this.gateTotalAmount = document.getElementById("gateTotalAmount");
      this.printGateBtn = document.getElementById("printGateBtn");

      // Farmer Portal
      this.farmerQuotaTracker = document.getElementById("farmerQuotaTracker");
      this.createBatchForm = document.getElementById("createBatchForm");

      // Cart Drawer
      this.cartBackdrop = document.getElementById("cartBackdrop");
      this.openCartBtn = document.getElementById("openCartBtn");
      this.closeCartBtn = document.getElementById("closeCartBtn");
      this.cartItemsList = document.getElementById("cartItemsList");
      this.cartCountPill = document.getElementById("cartCount");
      this.cartTotalPrice = document.getElementById("cartTotalPrice");
      this.cartSavingsNotice = document.getElementById("cartSavingsNotice");
      this.checkoutForm = document.getElementById("checkoutForm");

      // Pass Modal
      this.passModal = document.getElementById("passModal");
      this.closePassModal = document.getElementById("closePassModal");
      this.passFlatDisplay = document.getElementById("passFlatDisplay");
      this.passMetaDisplay = document.getElementById("passMetaDisplay");
      this.passQrImg = document.getElementById("passQrImg");
      this.passItemsBreakdown = document.getElementById("passItemsBreakdown");
      this.passWhatsAppBtn = document.getElementById("passWhatsAppBtn");

      // Footer Links
      this.footerCatLinks = document.getElementById("footerCatLinks");
    }

    bindEvents() {
      // Tab Navigation
      if (this.navTabs) {
        this.navTabs.addEventListener("click", e => {
          const btn = e.target.closest(".nav-btn");
          if (btn) this.store.setView(btn.dataset.view);
        });
      }

      // Category Chips
      if (this.categoryFilterBar) {
        this.categoryFilterBar.addEventListener("click", e => {
          const chip = e.target.closest(".cat-chip");
          if (chip) this.store.setCategoryFilter(chip.dataset.cat);
        });
      }

      // Footer Category Links
      if (this.footerCatLinks) {
        this.footerCatLinks.addEventListener("click", e => {
          const link = e.target.closest("[data-cat-link]");
          if (link) {
            e.preventDefault();
            this.store.setView("marketplace");
            this.store.setCategoryFilter(link.dataset.catLink);
            window.scrollTo({ top: 400, behavior: "smooth" });
          }
        });
      }

      // Search Inputs
      if (this.searchInput) {
        this.searchInput.addEventListener("input", e => this.store.setSearchQuery(e.target.value));
      }
      if (this.gateTableSearch) {
        this.gateTableSearch.addEventListener("input", e => this.store.setGateSearchQuery(e.target.value));
      }

      // Cart Controls
      if (this.openCartBtn) {
        this.openCartBtn.addEventListener("click", () => this.cartBackdrop.classList.add("open"));
      }
      if (this.closeCartBtn) {
        this.closeCartBtn.addEventListener("click", () => this.cartBackdrop.classList.remove("open"));
      }

      // Checkout Form Submission
      if (this.checkoutForm) {
        this.checkoutForm.addEventListener("submit", e => {
          e.preventDefault();
          const name = document.getElementById("chkName").value.trim();
          const flat = document.getElementById("chkFlat").value.trim();
          const mobile = document.getElementById("chkMobile").value.trim();

          const order = this.store.createOrder({ name, flat, mobile });
          if (order) {
            this.checkoutForm.reset();
            this.cartBackdrop.classList.remove("open");
            this.showGatePassModal(order);
          } else {
            alert("Please add at least one fresh produce item to your cart.");
          }
        });
      }

      // Pass Modal Close
      if (this.closePassModal) {
        this.closePassModal.addEventListener("click", () => this.passModal.classList.remove("open"));
      }

      // Print Gate Button
      if (this.printGateBtn) {
        this.printGateBtn.addEventListener("click", () => window.print());
      }

      // Create Harvest Produce Form Submission
      if (this.createBatchForm) {
        this.createBatchForm.addEventListener("submit", e => {
          e.preventDefault();
          const customImg = document.getElementById("prodImage").value.trim();
          const newBatch = {
            id: `batch_${Date.now()}`,
            name: document.getElementById("prodName").value.trim(),
            category: document.getElementById("prodCategory").value,
            origin: document.getElementById("prodFarmer").value.trim(),
            unit: document.getElementById("prodUnit").value,
            farmPrice: Number(document.getElementById("prodPrice").value),
            marketPrice: Number(document.getElementById("prodMarketPrice").value),
            availableStock: Number(document.getElementById("prodTarget").value),
            soldQuantity: 0,
            image: customImg || DEFAULT_GENERIC_FALLBACK,
            fallbackImage: customImg || DEFAULT_GENERIC_FALLBACK
          };

          this.store.addHarvestBatch(newBatch);
          this.createBatchForm.reset();
          alert("Farm produce published successfully! It is now available in the marketplace.");
        });
      }
    }

    render() {
      this.renderViewPanels();
      this.renderCategoryChips();
      this.renderCatalog();
      this.renderCartUI();
      this.renderGateDesk();
      this.renderFarmerPortal();
    }

    renderViewPanels() {
      // Toggle nav buttons
      document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === this.store.currentView);
      });

      // Toggle view panels
      this.viewPanels.forEach(panel => {
        const isMatch = panel.id === `${this.store.currentView}-view`;
        panel.classList.toggle("active", isMatch);
      });
    }

    renderCategoryChips() {
      if (!this.categoryFilterBar) return;
      const counts = this.store.getCategoryCounts();

      this.categoryFilterBar.innerHTML = Object.keys(CATEGORY_MAP)
        .map(cat => {
          const config = CATEGORY_MAP[cat];
          const isActive = this.store.activeCategory === cat;
          const count = counts[cat] || 0;
          return `
            <button class="cat-chip ${isActive ? 'active' : ''}" data-cat="${cat}">
              <span>${config.icon} ${config.label}</span>
              <span class="chip-count">${count}</span>
            </button>
          `;
        })
        .join("");
    }

    renderCatalog() {
      if (!this.catalogGrid) return;
      const filtered = this.store.getFilteredProducts();

      if (this.totalActiveBatches) this.totalActiveBatches.innerText = this.store.products.length;

      if (filtered.length === 0) {
        this.catalogGrid.innerHTML = `
          <div class="empty-catalog-state">
            <span style="font-size: 3rem;">🌾</span>
            <h3>No fresh produce matches your search</h3>
            <p>Try resetting search keywords or selecting another produce category.</p>
          </div>
        `;
        return;
      }

      this.catalogGrid.innerHTML = filtered
        .map(item => {
          const savingsPercent = Math.max(0, Math.round(((item.marketPrice - item.farmPrice) / item.marketPrice) * 100));
          const imgSrc = item.image || DEFAULT_GENERIC_FALLBACK;
          const fallbackSrc = item.fallbackImage || DEFAULT_GENERIC_FALLBACK;
          const inCartQty = this.store.cart[item.id] || 0;
          const isOutOfStock = item.availableStock <= 0;
          const isLowStock = !isOutOfStock && item.availableStock <= 15;

          let stockBadgeText = "Available Now";
          let stockBadgeClass = "available";
          if (isOutOfStock) {
            stockBadgeText = "Out of Stock";
            stockBadgeClass = "out-stock";
          } else if (isLowStock) {
            stockBadgeText = `Only ${item.availableStock} ${item.unit} left`;
            stockBadgeClass = "low-stock";
          }

          return `
            <div class="product-card ${isOutOfStock ? 'card-disabled' : ''}">
              <div class="card-img-wrapper">
                <img 
                  src="${imgSrc}" 
                  alt="${item.name}" 
                  class="prod-img" 
                  loading="lazy" 
                  onerror="this.onerror=null; this.src='${fallbackSrc}';"
                />
                <div class="card-badge-container">
                  <span class="save-badge">Save ${savingsPercent}%</span>
                  <span class="quota-badge ${stockBadgeClass}">
                    ${stockBadgeText}
                  </span>
                </div>
              </div>

              <div class="card-body">
                <span class="category-tag">${item.category}</span>
                <h3 class="prod-title">${item.name}</h3>
                <p class="prod-origin">📍 ${item.origin}</p>

                <div class="price-container">
                  <span class="direct-price">₹${item.farmPrice} <small>/ ${item.unit}</small></span>
                  <span class="market-price">₹${item.marketPrice}</span>
                </div>

                <div class="card-stock-info">
                  <span class="stock-label">${isOutOfStock ? 'Out of Stock' : `Available: ${item.availableStock} ${item.unit}`}</span>
                </div>

                <div class="card-footer">
                  ${
                    isOutOfStock
                      ? `<button class="btn-primary full-width btn-disabled" disabled>Out of Stock</button>`
                      : inCartQty > 0
                      ? `
                        <div class="card-qty-row">
                          <div class="qty-counter card-qty-counter">
                            <button class="qty-btn dec-card-btn" data-id="${item.id}">-</button>
                            <span class="qty-num">${inCartQty} ${item.unit} in cart</span>
                            <button class="qty-btn inc-card-btn" data-id="${item.id}" ${inCartQty >= item.availableStock ? 'disabled' : ''}>+</button>
                          </div>
                        </div>
                      `
                      : `
                        <button class="btn-primary full-width add-to-cart-btn" data-id="${item.id}">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                          Add to Cart
                        </button>
                      `
                  }
                </div>
              </div>
            </div>
          `;
        })
        .join("");

      // Bind Add to Cart & Card Quantity Button Listeners
      this.catalogGrid.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          this.store.addToCart(btn.dataset.id, 1);
          this.cartBackdrop.classList.add("open");
        });
      });
      this.catalogGrid.querySelectorAll(".dec-card-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          this.store.updateCartQty(btn.dataset.id, -1);
        });
      });
      this.catalogGrid.querySelectorAll(".inc-card-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          this.store.addToCart(btn.dataset.id, 1);
        });
      });
    }

    renderCartUI() {
      if (!this.cartItemsList || !this.cartCountPill) return;
      const { totalItems, totalPrice, totalSavings } = this.store.getCartSummary();

      this.cartCountPill.innerText = totalItems;
      if (this.cartTotalPrice) this.cartTotalPrice.innerText = `₹${totalPrice}`;
      if (this.cartSavingsNotice) {
        this.cartSavingsNotice.innerText =
          totalSavings > 0
            ? `You save approx ₹${totalSavings} vs retail supermarket rates!`
            : "Direct farm rate with zero middleman fee.";
      }

      const cartKeys = Object.keys(this.store.cart);
      if (cartKeys.length === 0) {
        this.cartItemsList.innerHTML = `
          <div class="empty-cart-view">
            <span style="font-size: 2.5rem; opacity: 0.7;">🛒</span>
            <p>Your shopping cart is empty.</p>
            <small>Browse fresh produce directly from local farmers and order what you need.</small>
          </div>
        `;
        return;
      }

      this.cartItemsList.innerHTML = cartKeys
        .map(id => {
          const prod = this.store.products.find(p => p.id === id);
          if (!prod) return "";
          const qty = this.store.cart[id];
          const fallbackSrc = prod.fallbackImage || DEFAULT_GENERIC_FALLBACK;
          return `
            <div class="cart-item">
              <img src="${prod.image || DEFAULT_GENERIC_FALLBACK}" alt="${prod.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='${fallbackSrc}';" />
              <div class="cart-item-info">
                <div class="cart-item-title">${prod.name}</div>
                <div class="cart-item-sub">₹${prod.farmPrice} / ${prod.unit} • Subtotal: ₹${prod.farmPrice * qty}</div>
              </div>
              <div class="qty-counter">
                <button class="qty-btn dec-cart-btn" data-id="${id}">-</button>
                <span class="qty-num">${qty} ${prod.unit}</span>
                <button class="qty-btn inc-cart-btn" data-id="${id}" ${qty >= prod.availableStock ? 'disabled' : ''}>+</button>
              </div>
            </div>
          `;
        })
        .join("");

      // Bind Cart Quantity Buttons
      this.cartItemsList.querySelectorAll(".dec-cart-btn").forEach(btn => {
        btn.addEventListener("click", () => this.store.updateCartQty(btn.dataset.id, -1));
      });
      this.cartItemsList.querySelectorAll(".inc-cart-btn").forEach(btn => {
        btn.addEventListener("click", () => this.store.updateCartQty(btn.dataset.id, 1));
      });
    }

    renderGateDesk() {
      if (!this.gateTableBody) return;
      const orders = this.store.orders;
      const query = this.store.gateSearchQuery;

      let totalCollectedVal = 0;
      let collectedCount = 0;
      let pendingCount = 0;

      const filteredOrders = orders.filter(ord => {
        totalCollectedVal += ord.totalAmount;
        if (ord.collected) collectedCount++;
        else pendingCount++;

        return (
          ord.flat.toLowerCase().includes(query) ||
          ord.name.toLowerCase().includes(query) ||
          ord.itemsSummary.toLowerCase().includes(query) ||
          ord.orderId.toLowerCase().includes(query)
        );
      });

      if (this.gateOrdersCount) this.gateOrdersCount.innerText = orders.length;
      if (this.gateCollectedCount) this.gateCollectedCount.innerText = collectedCount;
      if (this.gatePendingCount) this.gatePendingCount.innerText = pendingCount;
      if (this.gateTotalAmount) this.gateTotalAmount.innerText = `₹${totalCollectedVal}`;

      if (filteredOrders.length === 0) {
        this.gateTableBody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align:center; padding:30px; color:#64748b;">
              No customer orders match "${query}".
            </td>
          </tr>
        `;
        return;
      }

      this.gateTableBody.innerHTML = filteredOrders
        .map(ord => `
          <tr>
            <td><strong>#${ord.orderId}</strong></td>
            <td><span class="flat-tag">${ord.flat}</span></td>
            <td>${ord.name}</td>
            <td>${ord.itemsSummary}</td>
            <td><strong>₹${ord.totalAmount}</strong></td>
            <td>
              <span class="status-badge ${ord.collected ? 'collected' : 'pending'}">
                ${ord.collected ? 'Picked Up' : 'Awaiting Pickup'}
              </span>
            </td>
            <td class="print-hide">
              <button class="btn-outline toggle-gate-btn" data-id="${ord.orderId}">
                ${ord.collected ? 'Undo' : 'Mark Collected'}
              </button>
            </td>
          </tr>
        `)
        .join("");

      // Bind Toggle Collection Buttons
      this.gateTableBody.querySelectorAll(".toggle-gate-btn").forEach(btn => {
        btn.addEventListener("click", () => this.store.toggleOrderCollection(btn.dataset.id));
      });
    }

    renderFarmerPortal() {
      if (!this.farmerQuotaTracker) return;

      this.farmerQuotaTracker.innerHTML = this.store.products
        .map(item => {
          const fallbackSrc = item.fallbackImage || DEFAULT_GENERIC_FALLBACK;
          const isOutOfStock = item.availableStock <= 0;
          const isLowStock = !isOutOfStock && item.availableStock <= 15;
          let chipText = `In Stock (${item.availableStock} ${item.unit})`;
          let chipClass = "ready";
          if (isOutOfStock) {
            chipText = "Out of Stock";
            chipClass = "out-stock";
          } else if (isLowStock) {
            chipText = `Low Stock (${item.availableStock} ${item.unit})`;
            chipClass = "low-stock";
          }

          return `
            <div class="batch-tracker-row">
              <div style="display:flex; align-items:center; gap:12px;">
                <img src="${item.image || DEFAULT_GENERIC_FALLBACK}" class="batch-thumb" alt="${item.name}" onerror="this.onerror=null; this.src='${fallbackSrc}';" />
                <div>
                  <strong>${item.name}</strong>
                  <div style="font-size:0.78rem; color:#64748b;">
                    ${item.origin} • Available: ${item.availableStock} ${item.unit} • Sold: ${item.soldQuantity || 0} ${item.unit}
                  </div>
                </div>
              </div>
              <div>
                <span class="tracker-percent-chip ${chipClass}">
                  ${chipText}
                </span>
              </div>
            </div>
          `;
        })
        .join("");
    }

    showGatePassModal(order) {
      if (!this.passModal) return;

      if (this.passFlatDisplay) this.passFlatDisplay.innerText = `Flat ${order.flat}`;
      if (this.passMetaDisplay) this.passMetaDisplay.innerText = `Order #${order.orderId} • ${order.name}`;
      if (this.passItemsBreakdown) {
        this.passItemsBreakdown.innerHTML = `
          <strong>Produce Items:</strong> ${order.itemsSummary}<br>
          <strong>Total Amount:</strong> ₹${order.totalAmount}
        `;
      }

      // Native UPI Standard URI Encoding
      const upiUri = `upi://pay?pa=farmercollective@upi&pn=UzhavanDirect&am=${order.totalAmount}&cu=INR&tn=${order.orderId}_${order.flat}`;
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;
      if (this.passQrImg) this.passQrImg.src = qrUrl;

      // WhatsApp Share Formatting
      const waMsg = `*Uzhavan Direct Order Confirmation*\nOrder ID: ${order.orderId}\nFlat: ${order.flat}\nName: ${order.name}\nItems: ${order.itemsSummary}\nTotal: ₹${order.totalAmount}\nGate Pickup: Tomorrow Morning 6:30 AM`;
      if (this.passWhatsAppBtn) {
        this.passWhatsAppBtn.onclick = () => {
          window.open(`https://wa.me/?text=${encodeURIComponent(waMsg)}`, "_blank");
        };
      }

      this.passModal.classList.add("open");
    }

    startTimers() {
      // Social Proof Live Order Toast Notifications
      const orderNotifications = [
        { title: "🛒 New Order Placed", body: "A customer just ordered 2 kg Country Tomatoes" },
        { title: "🛒 New Order Placed", body: "A customer just ordered 1 L Cold-Pressed Sesame Oil" },
        { title: "🛒 New Order Placed", body: "A customer just ordered 3 pcs Tender Coconuts" },
        { title: "🛒 New Order Placed", body: "A customer just ordered 5 kg Traditional Mappillai Samba Rice" },
        { title: "🛒 New Order Placed", body: "A customer just ordered 1 kg Small Sambar Onions" }
      ];

      const showToast = () => {
        const toast = document.getElementById("liveToast");
        const title = document.getElementById("toastTitle");
        const body = document.getElementById("toastBody");
        if (!toast || !title || !body) return;

        const ev = orderNotifications[Math.floor(Math.random() * orderNotifications.length)];
        title.innerText = ev.title;
        body.innerText = ev.body;

        toast.classList.add("visible");
        setTimeout(() => toast.classList.remove("visible"), 4500);
      };

      setTimeout(showToast, 4000);
      setInterval(showToast, 18000);
    }
  }

  // ==========================================
  // 5. APPLICATION LIFECYCLE INITIALIZATION
  // ==========================================
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const store = new AppStore();
      window.__UZHAVAN_APP__ = new UIManager(store);
      console.log("🌱 Uzhavan Direct Application Initialized (Individual Customer Model).");
    } catch (err) {
      console.error("Critical failure during Uzhavan Direct initialization:", err);
    }
  });

})();