import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["helm"]?: typeof import("nuxt-helm").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-helm", Exclude<NuxtConfig["helm"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   DB: string,

   helm: {
      crossOriginResourcePolicy: string,

      crossOriginOpenerPolicy: string,

      crossOriginEmbedderPolicy: string,

      contentSecurityPolicy: string,

      originAgentCluster: string,

      referrerPolicy: string,

      strictTransportSecurity: string,

      xContentTypeOptions: string,

      xDNSPrefetchControl: string,

      xDownloadOptions: string,

      xFrameOptions: string,

      xPermittedCrossDomainPolicies: string,

      xXSSProtection: number,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }