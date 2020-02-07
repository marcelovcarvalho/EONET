using System;
namespace EONET.Classes.Dto
{
    public class DtoEventsRequest
    {
        public DtoEventsFilterResquest filter { get; set; }
        public DtoEventsOrderRequest order { get; set; }
    }
}
