import axios from "axios";
import { APIURL, createNotification, notificationType } from "./config";

export const registerApiReq = async (
  NotificationManager,
  e,
  setError,
  setFormName
) => {
  e.preventDefault();
  const email = e.target.email.value,
    password = e.target.password.value,
    password2 = e.target.password2.value;
  setError(null);
  if (password === password2) {
    const url = `${APIURL}/auth/register`;
    try {
      const response = await axios.post(url, {
        email,
        password,
      });

      if (!response.data.success) {
        createNotification(
          NotificationManager,
          notificationType.error,
          response.data.message
        );
        setError(response.data.message);
      } else {
        setFormName("login");
      }
    } catch (err) {
      throw err;
    }
  } else {
    setError("Passwords don't match");
  }
};

export const loginApiReq = async (
  NotificationManager,
  e,
  setError,
  setUser
) => {
  e.preventDefault();
  const email = e.target.email.value,
    password = e.target.password.value;
  setError(null);

  const url = `${APIURL}/auth/login`;
  try {
    const response = await axios.post(url, {
      email,
      password,
    });

    if (!response.data.success) {
      createNotification(
        NotificationManager,
        notificationType.error,
        response.data.message
      );
      setError(response.data.message);
    } else {
      setUser(response.data);
      localStorage.setItem("raintechUser", JSON.stringify(response.data));
    }
  } catch (err) {
    throw err;
  }
};

export const getMovies = async (NotificationManager, setError, setMovies) => {
  const url = `${APIURL}/movies`;
  try {
    const response = await axios.get(url);
    if (!response.data.success) {
      createNotification(
        NotificationManager,
        notificationType.error,
        response.data.message
      );
    } else {
      setMovies([...response.data.data]);
    }
  } catch (err) {
    throw err;
  }
};

export const updateMovie = async (
  NotificationManager,
  e,
  setMovies,
  movies,
  movieData,
  closeForm,
  setError
) => {
  e.preventDefault();

  const url = `${APIURL}/movie/update`;
  try {
    const response = await axios.put(url, movieData);
    if (!response.data.success) {
      createNotification(
        NotificationManager,
        notificationType.error,
        response.data.message
      );
    } else {
      let temp = movies.map((m) =>
        m._id === response.data.data._id ? response.data.data : m
      );
      setMovies([...temp]);
      closeForm();
    }
  } catch (err) {
    throw err;
  }
};

export const addMovie = async (
  NotificationManager,
  e,
  setMovies,
  movies,
  movieData,
  closeForm,
  setError
) => {
  e.preventDefault();

  const url = `${APIURL}/movie/add`;
  try {
    const response = await axios.post(url, movieData);
    if (!response.data.success) {
      createNotification(
        NotificationManager,
        notificationType.error,
        response.data.message
      );
    } else {
      setMovies([...movies, response.data.data]);
      closeForm();
    }
  } catch (err) {
    throw err;
  }
};

export const deleteMovie = async (
  NotificationManager,
  e,
  setMovies,
  movies,
  _id
) => {
  e.preventDefault();

  const url = `${APIURL}/movie/delete/${_id}`;
  try {
    const response = await axios.delete(url);
    if (!response.data.success) {
      createNotification(
        NotificationManager,
        notificationType.error,
        response.data.message
      );
    } else {
      const temp = movies.filter((m) => m._id !== _id);
      setMovies([...temp]);
    }
  } catch (err) {
    throw err;
  }
};
