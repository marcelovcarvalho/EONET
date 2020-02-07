using System.Collections.Generic;
using EONET.Classes.Dto;

namespace EONET.Interfaces
{
    public interface IEonetOrder
    {
        IEnumerable<DtoEvent> Order(IEnumerable<DtoEvent> events, DtoEventsOrderRequest order);
    }
}
