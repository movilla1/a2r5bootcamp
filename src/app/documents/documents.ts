export interface Document {
  id: string;
  type: string;
  attributes: {
    title: string;
    description: string;
    fileUrl: string;
    updatedAt: string;
    imageUrl: string;
  };
}
