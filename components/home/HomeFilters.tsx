"use client";

import { HomePageFilters } from "@/constants/filters";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

function HomeFilters() {
  const [active, setIsActive] = useState("");
  const searchParam = useSearchParams();
  const router = useRouter();

  const handleClick = (item: string) => {
    if (active === item) {
      setIsActive("");
      const newUrl = formUrlQuery({
        params: searchParam.toString(),
        key: "filter",
        value: null,
      });

      router.push(newUrl, { scroll: false });
    } else {
      setIsActive(item);
      const newUrl = formUrlQuery({
        params: searchParam.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });

      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400" : "bg-light-800 text-light-500  hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"}`}
          onClickCapture={() => handleClick(item.value)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}

export default HomeFilters;
