"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { HoverEffectDream } from "../ui/card-hover-effect-dream";
import { useFetchData } from "@/hooks/use-fetch-data";
import { useDebounce } from "@/hooks/use-debounce";
import { TDream } from "@/types/dream.type";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Dream = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedSortOrderBy, setSelectedSortOrderBy] = useState<string | null>(
    null
  );

  const debouncedSearch = useDebounce<string>(search, 1000);
  const pageSize = 6;

  const { data: dreamsData, refetch } = useFetchData({
    queryKey: ["dreamsData", pageIndex.toString()],
    dataProtected: `dreams?pgNum=${
      pageIndex + 1
    }&pgSize=${pageSize}&sortOrder=${
      selectedSortOrderBy || ""
    }&title=${debouncedSearch}`,
  });

  useEffect(() => {
    if (dreamsData?.data.meta?.count) {
      setTotalPages(Math.ceil(dreamsData?.data.meta.count / pageSize));
    }
  }, [dreamsData, pageSize]);

  useEffect(() => {
    refetch();
  }, [debouncedSearch, selectedSortOrderBy, pageIndex, refetch]);

  const resetFilter = () => {
    setSearch("");
    setSelectedSortOrderBy(null);
    setPageIndex(0);
  };

  const handlePageChange = (newPageIndex: number) => {
    setPageIndex(newPageIndex);
  };

  const dreamData = dreamsData?.data.dreams as TDream[];
  console.log(dreamData);

  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">A Glimpse into Dreams</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Dive into an inspiring collection of dreams shared by individuals
            striving to make a difference. These stories remind us of the
            limitless possibilities when ambition meets action.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <Input
            type="text"
            className=""
            placeholder="Search articles"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-row gap-5">
            <Select
              onValueChange={(value) => {
                setSelectedSortOrderBy(value);
                setPageIndex(0);
              }}
            >
              <SelectTrigger className="md:w-[180px]">
                <SelectValue
                  placeholder={
                    selectedSortOrderBy !== null
                      ? selectedSortOrderBy
                      : "Sort By"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
            <Button variant={"destructive"} onClick={resetFilter}>
              Reset
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#D0D1D3] my-5"></div>
        <HoverEffectDream dreams={dreamData} />
        <div className="flex justify-center gap-3 mt-8">
          <Button
            variant={"outline"}
            onClick={() => handlePageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handlePageChange(pageIndex + 1)}
            disabled={pageIndex + 1 === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dream;
