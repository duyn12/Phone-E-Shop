namespace Server.Models.Base
{
    public interface IHasSoftDelete
    {
        bool IsNotDeleted { get; set; }
    }
}
