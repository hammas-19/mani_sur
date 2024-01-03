import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   apiSecret: string,
  }
  interface PublicRuntimeConfig {
   apiBase: string,

   dev: {
      name: string,

      logo_name: string,

      role: string,

      about: {
         sections: {
            "professional-info": {
               title: string,

               icon: string,

               info: {
                  experience: {
                     title: string,

                     description: string,
                  },

                  "hard-skills": {
                     title: string,

                     description: string,
                  },

                  "soft-skills": {
                     title: string,

                     description: string,
                  },
               },
            },

            "personal-info": {
               title: string,

               icon: string,

               info: {
                  bio: {
                     title: string,

                     description: string,
                  },

                  interests: {
                     title: string,

                     description: string,
                  },
               },
            },

            "hobbies-info": {
               title: string,

               icon: string,

               info: {
                  "favorite-games": {
                     title: string,

                     description: string,
                  },
               },
            },
         },
      },

      contacts: {
         direct: {
            title: string,

            sources: {
               email: string,

               phone: string,
            },
         },

         social: {
            github: {
               title: string,

               url: string,

               user: string,
            },

            facebook: {
               title: string,

               url: string,

               user: string,
            },

            linkedin: {
               title: string,

               url: string,

               user: string,
            },
         },

         find_me_also_in: {
            title: string,

            sources: {
               instagram: {
                  title: string,

                  url: string,

                  user: string,
               },
            },
         },
      },

      gists: {
         1: string,

         2: string,
      },

      projects: {
         1: {
            title: string,

            description: string,

            img: string,

            tech: Array<string>,

            url: string,
         },

         2: {
            title: string,

            description: string,

            img: string,

            tech: Array<string>,

            url: string,
         },

         3: {
            title: string,

            description: string,

            img: string,

            tech: Array<string>,

            url: string,
         },

         4: {
            title: string,

            description: string,

            img: string,

            tech: Array<string>,

            url: string,
         },

         5: {
            title: string,

            description: string,

            img: string,

            tech: Array<string>,

            url: string,
         },

         6: {
            title: string,

            description: string,

            img: string,

            tech: Array<string>,

            url: string,
         },
      },
   },
  }
}