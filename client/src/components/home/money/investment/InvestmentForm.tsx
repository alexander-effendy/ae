import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { useAtom } from "jotai";
import { InvestmentCalculationDataAtom, type InvestmentCalculationData, type InvestmentYearlyResult } from "@/atom/InvestmentCalculationAtom";

// Define schema for investment form
const formSchema = z.object({
  initialCapital: z
    .number()
    .min(0, "Initial capital must be non-negative"),
  growthRate: z
    .number()
    .min(0, "Growth rate must be non-negative")
    .max(100, "Growth rate must be at most 100%"),
  weeklyInvestment: z
    .number()
    .min(0, "Weekly investment must be non-negative"),
  years: z
    .number()
    .min(1, "Must invest for at least 1 year")
    .int("Years must be a whole number"),
});

export type FormValues = z.infer<typeof formSchema>;

const InvestmentForm = () => {

  const [setInvestmentData] = useAtom<InvestmentCalculationData | null>(InvestmentCalculationDataAtom);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialCapital: 0,
      growthRate: 0,
      weeklyInvestment: 0,
      years: 1,
    },
  });

  function onSubmit(data: FormValues) {
    const { initialCapital, growthRate, weeklyInvestment, years } = data;
    const r = growthRate / 100;
    const annualContribution = weeklyInvestment * 52;
    const startYear = new Date().getFullYear();
    const endYear = startYear + years;

    let balance = initialCapital;
    const results: InvestmentYearlyResult[] = [];
    results.push({ year: startYear, balance });

    for (let y = startYear + 1; y <= endYear; y++) {
      balance = (balance + annualContribution) * (1 + r);
      results.push({ year: y, balance });
    }

    const calcData: InvestmentCalculationData = {
      startYear,
      endYear,
      results,
    };
    console.log(calcData)
    setInvestmentData(calcData);  // now type matches
  }

  return (
    <Card className="w-full flex flex-1 bg-black rounded-[0px] border-[0] pt-0">
      <div className="py-5 border-[1px] border-stone-800 p-0">
        <CardHeader className="mb-5">
          <CardTitle className="font-thin">Investment Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="investment-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Initial Capital */}
              <Controller
                name="initialCapital"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="font-thin text-stone-400" htmlFor="initialCapital">
                      Initial Capital
                    </FieldLabel>
                    <Input
                      {...field}
                      id="initialCapital"
                      type="number"
                      onChange={e => field.onChange(Number(e.target.value))}
                      step="0.01"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. 10000"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Growth Rate */}
              <Controller
                name="growthRate"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="font-thin text-stone-400" htmlFor="growthRate">
                      Growth Rate (%)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="growthRate"
                      type="number"
                      onChange={e => field.onChange(Number(e.target.value))}
                      step="0.01"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. 7.5"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Weekly Investment */}
              <Controller
                name="weeklyInvestment"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="font-thin text-stone-400" htmlFor="weeklyInvestment">
                      Weekly Investment
                    </FieldLabel>
                    <Input
                      {...field}
                      id="weeklyInvestment"
                      type="number"
                      onChange={e => field.onChange(Number(e.target.value))}
                      step="0.01"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. 200"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Years */}
              <Controller
                name="years"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="font-thin text-stone-400" htmlFor="years">
                      Years of Investment
                    </FieldLabel>
                    <Input
                      {...field}
                      id="years"
                      type="number"
                      onChange={e => field.onChange(Number(e.target.value))}
                      step="1"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. 20"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="mt-4 font-thin">
          <Field className="flex w-full" orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              form="investment-form"
              className="flex flex-1 bg-stone-400"
            >
              Calculate
            </Button>
          </Field>
        </CardFooter>
      </div>

    </Card>
  );
};

export default InvestmentForm;
