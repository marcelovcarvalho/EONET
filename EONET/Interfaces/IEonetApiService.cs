using System.Collections.Generic;
using System.Threading.Tasks;
using EONET.Classes.Dto;

namespace EONET.Interfaces
{
    public interface IEonetApiService
    {
        Task<IEnumerable<DtoEvent>> GetEvents();

        Task<IEnumerable<DtoCategory>> GetCategories();
    }
}
