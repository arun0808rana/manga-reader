import { api } from "./api";

export const diffuseApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getSliderData: builder.query({
            query: () => ({
                url: `data`,
            })
        })
    })
})

export const { useGetSliderDataQuery } = diffuseApiSlice;