import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        careers: "Careers",
        isupplier: "iSupplier",
        faqs: "FAQs",
        about: "About NexaCrude",
        units: "NexaCrude Units",
        logistics: "Logistic Services",
        investors: "Investor Relations",
        track: "Track Shipment"
      },
      footer: {
        about_desc: "A global leader in logistics and shipping, driving the maritime industry forward with innovation and excellence.",
        about: "About",
        company_profile: "Company Profile",
        leadership: "Leadership",
        sustainability: "Sustainability",
        awards: "Awards",
        services: "Services",
        ship_management: "Ship Management",
        support: "Support",
        contact_us: "Contact Us",
        global_network: "Global Network",
        privacy_policy: "Privacy Policy",
        terms_conditions: "Terms & Conditions",
        copyright: "© 2026 NexaCrude. All rights reserved. Saudi Vision 2030"
      },
      home: {
        slide1_title: "Connecting Economies",
        slide1_subtitle: "Driving Global Trade with Innovative Logistics",
        slide2_title: "Sharing Prosperity",
        slide2_subtitle: "A Strategic Partner in Saudi Vision 2030",
        slide3_title: "Global Logistics Solutions",
        slide3_subtitle: "End-to-End Excellence Across All Borders",
        about_btn: "About NexaCrude",
        units_title: "Our Business Units",
        units_subtitle: "Diverse maritime services tailored to global needs.",
        oil_name: "NexaCrude Oil",
        oil_desc: "World leader in VLCC ownership and operation.",
        logistics_name: "NexaCrude Logistics",
        logistics_desc: "Comprehensive freight forwarding and warehousing.",
        chemicals_name: "NexaCrude Chemicals",
        chemicals_desc: "Safe transport of high-value chemical products.",
        drybulk_name: "NexaCrude Dry Bulk",
        drybulk_desc: "Reliable shipment of agricultural and mineral bulk.",
        ship_mgmt_name: "Ship Management",
        ship_mgmt_desc: "Expert technical and crew management services.",
        marine_name: "NexaCrude Marine",
        marine_desc: "Specialized offshore and subsea support services.",
        learn_more: "Learn More",
        exp_stat: "Years of Experience",
        vessels_stat: "Global Vessels",
        ports_stat: "Port Connections",
        monitoring_stat: "Live Monitoring",
        investor_title: "Investor Relations",
        investor_desc: "Transparent and accurate financial reporting for our global stakeholders.",
        annual_reports: "Annual Reports",
        stock_info: "Stock Info"
      },
      tracking: {
        title: "Track Your Shipment",
        desc: "Enter your tracking number to follow the movement of your cargo or shipment.",
        placeholder: "Enter Tracking ID (e.g., NXC-VLCC-1361)",
        btn: "Track Now",
        live_simulation: "Live Voyage Simulation",
        not_found: "Vessel not found. Please verify the tracking code.",
        current_day: "Current Day: {{day}} / 5",
        start_voyage: "Start Voyage",
        pause: "Pause",
        reset: "Reset",
        busan: "Busan",
        qingdao: "Qingdao",
        shanghai: "Shanghai",
        current_leg: "Current Leg",
        at_port_busan: "At Port: Busan",
        busan_qingdao: "Busan → Qingdao",
        at_port_qingdao: "At Port: Qingdao",
        qingdao_shanghai: "Qingdao → Shanghai",
        arrived_shanghai: "Arrived: Shanghai",
        estimated_eta: "Estimated ETA",
        delivered: "Delivered",
        departure_busan: "Departure: Busan",
        stop_qingdao: "Stop: Qingdao",
        arrival_shanghai: "Arrival: Shanghai"
      },
      about: {
        title: "About NexaCrude",
        intro: "NexaCrude is a next-generation maritime logistics leader built for modern energy and trade. We blend ultra-large crude carrier expertise, digital shipping operations, and sustainable port-to-port services to move global commerce with speed, transparency, and resilience.",
        mission_title: "Our Mission",
        mission_text: "Deliver safe, reliable and carbon-conscious shipping solutions that empower customers, communities and economies across every ocean.",
        vision_title: "Our Vision",
        vision_text: "Be the world’s most trusted maritime partner by combining Saudi strategic scale with advanced logistics intelligence and next-level service.",
        values_title: "Core Strengths",
        values_text: "Integrated shipping, proactive supply-chain planning, and an innovation-first culture make NexaCrude the benchmark for modern maritime logistics.",
        sustainability_title: "Sustainability Focus",
        sustainability_text: "We invest in cleaner fuel options, shore power-ready terminals, and voyage optimization to reduce emissions while maintaining dependable delivery."
      },
      units: {
        title: "NexaCrude Business Units",
        intro: "Our diversified business units deliver specialized services across ship operation, cargo logistics, chemical transport, dry-bulk movement, and offshore marine support.",
        oil_desc: "Managed VLCC fleet and crude carriage solutions connecting oil producers to refineries with safe, compliant transport.",
        logistics_desc: "Integrated freight forwarding, customs facilitation, warehousing and multimodal coordination across major trade corridors.",
        chemicals_desc: "Dedicated chemical tankers and risk-aware handling for sensitive industrial cargo.",
        drybulk_desc: "Efficient chartering and shipment of dry commodities including grain, minerals and construction materials.",
        ship_mgmt_desc: "Technical management, crew services, maintenance and compliance support for modern tanker operations.",
        marine_desc: "Offshore support, subsea logistics and marine engineering services for ports and energy projects."
      },
      placeholders: {
        about_title: "About NexaCrude",
        about_desc: "This is a placeholder for the About page.",
        units_title: "NexaCrude Units",
        units_desc: "This is a placeholder for the Business Units page.",
        logistics_title: "Logistic Services",
        logistics_desc: "This is a placeholder for the Logistics page.",
        investors_title: "Investor Relations",
        investors_desc: "This is a placeholder for the Investors page."
      }
    }
  },
  zh: {
    translation: {
      header: {
        careers: "职业生涯",
        isupplier: "电子供应商门户",
        faqs: "常见问题",
        about: "关于 NexaCrude",
        units: "NexaCrude 部门",
        logistics: "物流服务",
        investors: "投资者关系",
        track: "追踪货物"
      },
      footer: {
        about_desc: "全球物流与航运领军者，以创新和卓越推动海运业向前发展。",
        about: "关于我们",
        company_profile: "公司简介",
        leadership: "领导团队",
        sustainability: "可持续发展",
        awards: "荣获奖项",
        services: "服务范围",
        ship_management: "船舶管理",
        support: "客户支持",
        contact_us: "联系我们",
        global_network: "全球网络",
        privacy_policy: "隐私政策",
        terms_conditions: "条款与条件",
        copyright: "© 2026 NexaCrude。版权所有。沙特2030愿景"
      },
      home: {
        slide1_title: "连接全球经济",
        slide1_subtitle: "以创新物流驱动全球贸易",
        slide2_title: "共享繁荣",
        slide2_subtitle: "沙特2030愿景的战略合作伙伴",
        slide3_title: "全球物流解决方案",
        slide3_subtitle: "跨境端到端卓越服务",
        about_btn: "关于 NexaCrude",
        units_title: "我们的业务部门",
        units_subtitle: "量身定制的多样化海运服务，满足全球需求。",
        oil_name: "NexaCrude 石油",
        oil_desc: "超大型油轮（VLCC）所有权和运营领域的全球领军者。",
        logistics_name: "NexaCrude 物流",
        logistics_desc: "综合货运代理与仓储服务。",
        chemicals_name: "NexaCrude 化学品",
        chemicals_desc: "高价值化学品安全运输。",
        drybulk_name: "NexaCrude 干散货",
        drybulk_desc: "农业和矿物散装货物的可靠运输。",
        ship_mgmt_name: "船舶管理",
        ship_mgmt_desc: "专业的船舶技术及船员管理服务。",
        marine_name: "NexaCrude 海洋工程",
        marine_desc: "专业的近海及海底支持服务。",
        learn_more: "了解更多",
        exp_stat: "年行业经验",
        vessels_stat: "全球运营船舶",
        ports_stat: "港口连接数",
        monitoring_stat: "实时监控服务",
        investor_title: "投资者关系",
        investor_desc: "为我们的全球利益相关者提供透明、准确的财务报告。",
        annual_reports: "年度报告",
        stock_info: "股票信息"
      },
      tracking: {
        title: "追踪您的货物",
        desc: "输入您的追踪号码，跟踪您的货物或运单的移动。",
        placeholder: "输入追踪ID（例如：NXC-VLCC-3321）",
        btn: "立即追踪",
        live_simulation: "实时航程模拟",
        not_found: "未找到该船舶。请核实追踪代码。",
        current_day: "当前天数：第 {{day}} 天 / 共 5 天",
        start_voyage: "开始航行",
        pause: "暂停",
        reset: "重置",
        busan: "釜山",
        qingdao: "青岛",
        shanghai: "上海",
        current_leg: "当前航段",
        at_port_busan: "在港：釜山",
        busan_qingdao: "釜山 → 青岛",
        at_port_qingdao: "在港：青岛",
        qingdao_shanghai: "青岛 → 上海",
        arrived_shanghai: "已抵达：上海",
        estimated_eta: "预计到达时间 (ETA)",
        delivered: "已送达",
        departure_busan: "启航：釜山",
        stop_qingdao: "中途停靠：青岛",
        arrival_shanghai: "抵达：上海"
      },
      about: {
        title: "关于 NexaCrude",
        intro: "NexaCrude 是一家面向现代能源与贸易的下一代海运物流领军企业。我们将超大型油轮专业能力、数字化航运运营和可持续港到港服务相结合，以速度、透明度和韧性推动全球贸易。",
        mission_title: "我们的使命",
        mission_text: "提供安全、可靠且碳敏感的运输解决方案，助力客户、社区和经济体跨越每一个海洋。",
        vision_title: "我们的愿景",
        vision_text: "通过沙特战略规模与先进物流智能和卓越服务相结合，成为全球最值得信赖的海运合作伙伴。",
        values_title: "核心优势",
        values_text: "一体化航运、主动供应链规划和以创新为先的文化，使 NexaCrude 成为现代海运物流的标杆。",
        sustainability_title: "可持续发展",
        sustainability_text: "我们投资于更清洁燃料方案、岸电兼容码头和航程优化，减少排放同时保持可靠交付。"
      },
      units: {
        title: "NexaCrude 业务部门",
        intro: "我们的多元化业务部门提供船舶运营、货运物流、化学品运输、干散货运输和离岸海洋支持等专业服务。",
        oil_desc: "管理 VLCC 船队和原油运输解决方案，安全合规地连接产油商与炼油厂。",
        logistics_desc: "整合货运代理、通关服务、仓储和多式联运协调，覆盖主要贸易走廊。",
        chemicals_desc: "专用化学品油轮和敏感工业货物的风险控制运输服务。",
        drybulk_desc: "高效租船和散货运输服务，涵盖粮食、矿产和建筑材料。",
        ship_mgmt_desc: "提供技术管理、船员服务、维护和合规支持，保障现代油轮运营。",
        marine_desc: "为港口和能源项目提供离岸支援、海底物流和海洋工程服务。"
      },
      placeholders: {
        about_title: "关于 NexaCrude",
        about_desc: "这是关于页面的占位内容。",
        units_title: "NexaCrude 部门",
        units_desc: "这是业务部门页面的占位内容。",
        logistics_title: "物流服务",
        logistics_desc: "这是物流服务页面的占位内容。",
        investors_title: "投资者关系",
        investors_desc: "这是投资者关系页面的占位内容。"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
