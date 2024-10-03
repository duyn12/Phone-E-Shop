namespace Server.Infrastructures.Repositories.Interface
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAllArchive();
        IQueryable<T> GetAll();
        Task<T?> GetByIdAsync(string? id);
        Task AddAsync(T? entity);
        Task UpdateAsync(T? entity);
        Task DeleteAsync(string? id);
    }
}
