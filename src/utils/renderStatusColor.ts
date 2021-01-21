export const renderStatusColor = (status: string | null) => {
  switch (status) {
    case "done":
      return "#4cb919";
    case "active":
      return "#b9af19";
    default:
      return "#ccc";
  }
};