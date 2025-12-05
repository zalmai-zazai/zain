import CartSummaryBar from "@/components/menu/CartSummaryBar";
import DietaryFilters from "@/components/menu/DietaryFilters";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuCategories from "@/components/sections/MenuCategories";
import MenuItemsGrid from "@/components/sections/MenuItemsGrid";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      <MenuHeader />
      <div className="container mx-auto px-4">
        <DietaryFilters />
        <MenuCategories />
        <MenuItemsGrid />
      </div>
      <CartSummaryBar />
    </div>
  );
}
