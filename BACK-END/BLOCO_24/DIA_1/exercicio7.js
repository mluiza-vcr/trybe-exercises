db.movies.updateOne({ title: "Batman" }, { $rename: { "budget": "estimateBudget" } });
