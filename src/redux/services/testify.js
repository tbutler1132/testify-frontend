import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const testifyApi = createApi({
    reducerPath: 'testifyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    endpoints: (builder) => ({
      getUserById: builder.query({
        query: (id) => `users/${id}`,
      }),
      getRandomTest: builder.query({
        query: (id) => `users/tests/random?user_id=${id}`
      }),
      uploadMedia: builder.mutation({
        query: ({files, id}) => ({
          url: `users/${id}/upload`,
          method: 'POST',
          body: files
        })
      }),
      createTest: builder.mutation({
        query: ({test, id}) => ({
          url: `users/${id}/tests`,
          method: 'POST',
          body: test
        })
      }),
      updateTest: builder.mutation({
        query: (test) => ({
          url: `users/${test.userId}/tests/${test.testId}`,
          method: 'POST',
          body: test
        })
      }),
      deleteTest: builder.mutation({
        query: ({userId, testId}) => ({
          url: `users/${userId}/tests/${testId}`,
          method: 'DELETE',
        })
      }),
      updateMedia: builder.mutation({
        query: ({userId, testId, mediaId, media}) => ({
          url: `users/${userId}/tests/${testId}/media/${mediaId}`,
          method: 'PATCH',
          body: media
        })
      }),
      login: builder.mutation({
        query: (credentials) => ({
          url: `users/signin`,
          method: 'POST',
          body: credentials,
        }),   
      }),
      signup: builder.mutation({
        query: (credentials) => ({
          url: `users/signup`,
          method: 'POST',
          body: credentials,
        }),   
      })
    }),
  })

export const { 
  useGetUserByIdQuery, 
  useLoginMutation,
  useSignupMutation,
  useCreateTestMutation, 
  useUploadMediaMutation, 
  useGetRandomTestQuery, 
  useUpdateTestMutation, 
  useUpdateMediaMutation,
  useDeleteTestMutation
} = testifyApi