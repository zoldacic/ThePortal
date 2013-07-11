using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Raven.Client.Document;

namespace Economy.Helper
{
    public static class Database
    {
        private static DocumentStore _documentStore;
        private static string _database = "Economy";

        public static void Connect() {
            _documentStore = new DocumentStore { Url = "http://localhost:8080/"  };
            _documentStore.Initialize();
        }

        public static T Create<T>(T entity) {
            using (var session = _documentStore.OpenSession(_database)) {
                session.Store(entity);
                session.SaveChanges();
            }

            return entity;
        }

        public static T GetOrDefault<T>(int actionId) where T : new()
        {
            return new T();
        }
    }
}