import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginSchema } from '@/shared/zod'
import { cn } from '@/ui-components/utils'
import { LoadingSpinner } from '@/ui-components/svgs/spinner'
import { Button as ShinyButton } from '@/ui-components/button-shiny'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui-components/form'
import { Input } from '@/ui-components/input'

export interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {
  login: (formData: z.infer<typeof LoginSchema>) => Promise<void>
}

export function LoginForm({ className, login, ...props }: LoginFormProps) {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onLogin(data: z.infer<typeof LoginSchema>) {
    if (!login) throw new Error('Login function is not defined')
    login(data).then(() => {
      console.log('Login success')
    }).catch(error => {
      console.error('Login form error', error.digest)
      form.setError('root', { message: error.message }, { shouldFocus: true })
    })
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onLogin)}>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only pl-2">Email</FormLabel>
                  <FormControl>
                    <Input autoComplete="email" placeholder="Email..." {...field} />
                  </FormControl>
                  <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only pl-2">Password</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="current-password" placeholder="Password..." {...field} />
                  </FormControl>
                  <FormMessage className="pl-2" />
                  {form.formState.errors.root && (
                    <div className="text-sm text-destructive bg-secondary w-full p-1 rounded-md">
                      {form.formState.errors.root.message}
                    </div>
                  )}
                </FormItem>
              )}
            />
            <div className="flex justify-center pt-6">
              {form.formState.isSubmitting && (
                <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {!form.formState.isSubmitting && (
                <ShinyButton
                  variant="expandIcon"
                  Icon={ArrowRightIcon}
                  iconPlacement="right"
                  disabled={form.formState.isSubmitting}
                  className="w-full"
                >
                  Login with Email
                </ShinyButton>
              )}
            </div>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <ShinyButton variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
        GitHub
      </ShinyButton>
    </div>
  )
}
