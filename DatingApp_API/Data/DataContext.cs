using DatingApp_API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> option) : base(option) { }
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}