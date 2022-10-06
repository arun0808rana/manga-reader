import { api } from "./api";

export const mangaViwerApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getChapter: builder.query({
            query: (id) => ({
                url: `manga_view_chapters/${id}`,
            })
        })
    })
})

export const { useGetChapterQuery } = mangaViwerApiSlice;