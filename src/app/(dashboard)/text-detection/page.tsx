"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import { Card } from "@/components/ui/card";
import { LetterText, Loader, History } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import MenuIcon from "../../../assets/icon-menu.svg";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function AIDetectionPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [reasons, setReasons] = useState<string[]>([]);
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = async (data: any, event: any) => {

    if (data.text.length < 20) {
      alert("Text must be at least 20 characters long for detection.");
      return;
    }

    setLoading(true);
    setResult(null);
    setReasons([]);

    try {
      const formData = new FormData(event.target);

      const response = await fetch('/api/detect', {
        method: 'POST',
        body: formData,
      });

      const { result, reasons } = await response.json();
      setResult(result);
      setReasons(reasons);
      setHistory((prev) => [...prev, data.text]);
      reset();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-94px)] bg-black text-white flex items-start">
      <div className="w-1/4 h-full flex flex-col justify-between pb-6 bg-white/10 p-4 max-lg:hidden">
        <div className="">
          <h2 className="text-purple-400 flex gap-x-2 items-center text-lg font-bold mb-4">
            <History /> Recent Generations
          </h2>
          <ul className="border-t pt-6 border-white/20">
            {history.map((item, index) => (
              <li
                key={index}
                className="mb-3 p-3 list-none border-l hover:bg-black/15 border-purple-500 bg-black/30 rounded-lg truncate text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="h-full">
            <Button className="bg-purple-500 hover:bg-purple-700 active:bg-purple-400 text-white w-full mt-auto font-bold" asChild>
              <Link href="/#pricing">
                Upgrade to PRO
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full max-lg:p-3 lg:w-3/4 p-8">
        <h1 className="mb-6 font-bold flex items-center gap-x-3">
          <Sheet>
            <SheetTrigger className="p-2">
              <MenuIcon className="lg:hidden" />
            </SheetTrigger>
            <SheetContent side="left" className="pb-6 border-none bg-slate-800 p-4">
              <div className="h-full flex flex-col justify-between">
                <div className="">
                  <h2 className="text-purple-400 flex gap-x-2 items-center text-lg font-bold mb-4">
                    <History /> Recent Generations
                  </h2>
                  <ul className="border-t pt-6 border-white/20">
                    {history.map((item, index) => (
                      <li
                        key={index}
                        className="mb-3 p-3 list-none border-l hover:bg-black/15 border-purple-500 bg-black/30 rounded-lg truncate text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="h-full">
                    <Button className="bg-purple-500 hover:bg-purple-700 active:bg-purple-400 text-white w-full mt-auto font-bold" asChild>
                      <Link href="/#pricing">
                        Upgrade to PRO
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="p-3 bg-white text-black rounded-full">
            <LetterText size="40" className="size-[25px] lg:size-[30px]" />
          </div>
          <span className="text-3xl text-purple-400 max-lg:text-2xl">
            Text Detection Model
          </span>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Textarea
            {...register('text', { required: true })}
            placeholder="Paste your text here"
            required
            className="w-full bg-white/10 border-white/20 focus-visible:ring-0 p-2 min-h-[200px]"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full font-bold bg-purple-500 hover:bg-purple-600 text-white py-2"
          >
            {loading ? 'Detecting...' : 'Detect'}
          </Button>
        </form>

        {loading && (
          <div className="flex justify-center items-center mt-6">
            <Loader size="30" className="text-purple-500 animate-spin" />
            <span className="ml-4">Processing...</span>
          </div>
        )}

        {result && (
          <Card className="mt-6 bg-gray-900 p-4 border-white/30">
            <h3 className="text-2xl mb-2 text-white font-bold">Result</h3>
            <p className={`text-xl ${result === "AI-generated" ? "text-red-500" : "text-green-500"}`}>
              {result}
            </p>

            {reasons?.length > 0 && (
              <div className="mt-4">
                <h4 className="text-xl font-bold text-purple-400 mb-2">Reasons</h4>
                <ul className="list-disc pl-5">
                  {reasons.map((reason, index) => (
                    <li key={index} className="text-gray-300">
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
