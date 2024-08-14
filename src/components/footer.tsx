import Image from "next/image"

export default function Footers() {

    return (

<footer className="flex items-center justify-center py-6 w-full shrink-0 border-t">
        <div className="flex items-center gap-4">
          {/* <Link href="#" prefetch={false}> */}
            <Image src="/npcilogo.png" alt ="npci_logo" width={150} height={100} />
            <span className="sr-only">Sponsered by</span>
          {/* </Link> */}
          <div className="text-muted-foreground"><h1>|</h1></div>
          {/* <Link href="#" prefetch={false}> */}
          <Image src="/togetherWebuild.jpg" alt ="togetherWebuild" width={150} height={100} />
            <span className="sr-only">Powered by</span>
          {/* </Link> */}
        </div>
      </footer>

    )
}