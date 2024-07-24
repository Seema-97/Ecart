export const routes = {
    home: '/',
    reports: '/reports',
    inventories: '/inventories',
    dashboard: '/dashboard',
    products: '/products',
    employees: '/employees',
    readerApp: '/reader-app',
    ecommerceApp: '/voice-search',
    qrGenerator: '/qr-code-generator',
}
export const HEADER_MENUS = [
    {
        id: 1,
        itemName: "Dashboard",
        pathName: routes.dashboard,
    },
    {
        id: 2,
        itemName: "Inventory",
        pathName: routes.inventories,
    },
    {
        id: 3,
        itemName: "Reports",
        pathName: routes.reports,
    },
    {
        id: 4,
        itemName: "Employees",
        pathName: routes.employees,
    },
    {
        id: 5,
        itemName: "Products",
        pathName: routes.products,
    },
    {
        id: 6,
        itemName: "Reader App",
        pathName: routes.readerApp,
    },
    {
        id: 7,
        itemName: "Voice Commerce",
        pathName: routes.ecommerceApp,
    },
    {
        id: 8,
        itemName: "QR Code App",
        pathName: routes.qrGenerator,
    },
]