import { IProvider } from "@/common/interfaces/provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProviderInfo({ provider, price }: IProvider) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage
            src={`/images/${provider.toLowerCase()}.svg`}
            alt={provider}
          />
          <AvatarFallback>{provider.charAt(0)}</AvatarFallback>
        </Avatar>

        <h2 className="text-lg font-semibold">{provider}</h2>
      </div>

      <p className="text-lg font-bold">${price.toFixed(2)}</p>
    </div>
  );
}
