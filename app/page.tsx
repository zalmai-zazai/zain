import MenuCategories from "@/components/sections/MenuCategories";
import MenuItemsGrid from "@/components/sections/MenuItemsGrid";
import QuickOrderBar from "@/components/sections/QuickOrderBar";
import RestaurantInfo from "@/components/sections/RestaurantInfo";

export default function HomePage() {
  return (
    <div className="pt-4">
      <QuickOrderBar />
      <RestaurantInfo />
      <MenuCategories />
      <MenuItemsGrid />
    </div>
  );
}
