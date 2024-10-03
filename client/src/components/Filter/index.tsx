import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Button } from "@/components/ui/button";
  import {
    ArrowDownNarrowWide,
    ArrowDownWideNarrow,
    Eye,
    Percent,
  } from "lucide-react";
  import { useState } from "react";
  
export default function Filters() {
    
  const filterOptions = [
    { id: "1", label: "Chíp xử lý", value: "Snapdragon, Apple A, Unisoc" },
    {
      id: "2",
      label: "Loại điện thoại",
      value: "Android, iPhone, Feature Phone",
    },
    { id: "3", label: "Dung lượng pin", value: "3000mAh, 4000mAh, 5000mAh" },
  ];
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveButton(id);
  };
  const filterButton = [
    { id: "1", sort: "Giá Cao - Thấp", icon: <ArrowDownWideNarrow /> },
    { id: "2", sort: "Giá Thấp - Cao", icon: <ArrowDownNarrowWide /> },
    { id: "3", sort: "Khuyến Mãi Hot", icon: <Percent /> },
    { id: "4", sort: "Xem nhiều", icon: <Eye /> },
  ];

    return (
        <>
              <div className="my-6">
        <h2 className="font-bold text-xl">Chọn theo tiêu chí</h2>
        <div className="flex flex-wrap gap-4 mt-2">
          {filterOptions.map((option) => (
            <div className="basic-1/7" key={option.id}>
              <Select>
                <SelectTrigger id={option.id}>
                  <SelectValue placeholder={option.label} />
                </SelectTrigger>
                <SelectContent position="popper">
                  {option.value.split(", ").map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <h2 className="font-bold text-xl">Sắp xếp theo</h2>
        <div className="flex flex-wrap gap-4 mt-2">
          {/* ${activeButton === Btn.id ? 'active' : ''} */}
          {filterButton.map((Btn) => (
            <Button
              variant="outline"
              key={Btn.id}
              onClick={() => handleClick(Btn.id)}
              className={activeButton === Btn.id ? "active" : ""}
            >
              {Btn.icon && <span className={`mr-2 `}>{Btn.icon}</span>}
              {Btn.sort}
            </Button>
          ))}
        </div>
      </div>
        </>
    )
 }