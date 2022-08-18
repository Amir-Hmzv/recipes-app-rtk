import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'

const  AppId = `c023f750`
const ApiKey = `e2eeb2624c1bdd5d272c2232be931a49`


export  const recipeApi = createApi({
    reducerPath:' recipeApi',
    baseQuery :  fetchBaseQuery({baseUrl:`https://api.edamam.com/`}),
    endpoints : (builder) => ({
        getRecipes : builder.mutation({
            query : ({query,health}) => {
                return {
                    url : `search?q=${query}&app_id=${AppId}&app_key=${ApiKey}&health=${health}`,
                    method: 'get'
                }
            }
        })
    })
})


export const {useGetRecipesMutation} = recipeApi