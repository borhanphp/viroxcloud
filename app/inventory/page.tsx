"use client";

import ModulePage from "@/components/ModulePage";
import { Package, QrCode, Truck, RefreshCw, AlertTriangle } from "lucide-react";

export default function InventoryPage() {
    return (
        <ModulePage
            title="Inventory Management"
            description="Take full control of your stock. From raw materials to finished goods, track every item's journey across multiple locations in real-time."
            icon={Package}
            gradient="bg-gradient-to-br from-indigo-600 to-violet-600"
            painPoints={[
                "Frequent stockouts losing you sales",
                "Overstocking tying up valuable capital",
                "Inaccurate cycle counts and lost inventory",
                "Manual spreadsheet tracking that doesn't scale"
            ]}
            benefits={[
                {
                    title: "Real-Time Visibility",
                    description: "Know exactly what you have and where it is, instantly."
                },
                {
                    title: "Smart Reordering",
                    description: "Automated low-stock alerts and purchase order generation."
                },
                {
                    title: "Multi-Warehouse Support",
                    description: "Manage inventory across unlimited locations seamlessly."
                }
            ]}
            features={[
                {
                    title: "Barcode Scanning",
                    description: "Speed up receiving and picking with mobile barcode support.",
                    icon: QrCode
                },
                {
                    title: "Batch & Expiry Tracking",
                    description: "Perfect for perishable goods and regulated industries.",
                    icon: AlertTriangle
                },
                {
                    title: "Supplier Management",
                    description: "Track vendor performance and streamline procurement.",
                    icon: Truck
                },
                {
                    title: "Stock Sync",
                    description: "Auto-sync inventory across e-commerce channels (Shopify, WooCommerce).",
                    icon: RefreshCw
                }
            ]}
        />
    );
}
