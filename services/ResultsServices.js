class ResultsServices {
  async fetchNationalResults(election_id) {
    try {
      const res = await fetch(
        import.meta.env.VITE_APP_RESULT_URL +
          `results/president/national?election_id=${election_id}`
      );
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ResultsServices()