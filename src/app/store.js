import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "../features/Movies/moviesSlice"
import genreSlice from "../features/Genres/genreSlice"
import sessionSlice from "../features/Sessions/sessionSlice"
import hallSlice from "../features/Halls/hallSlice"
import bookingSlice from "../features/Booking/bookingSlice"
import cinemaSlice from "../features/Cinema/cinemaSlice"
import reviewsSlice from "../features/Reviews/reviewSlice"

export const store = configureStore({
  reducer: {
    movieReducer: moviesSlice,
    genreReducer: genreSlice,
    sessionReducer: sessionSlice,
    hallReducer: hallSlice,
    bookingReducer: bookingSlice,
    cinemaReducer: cinemaSlice,
    reviewReducer: reviewsSlice,
  },
})
