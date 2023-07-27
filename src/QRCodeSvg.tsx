import { forwardRef, SVGProps } from 'react'

interface QRCodeSvgProps extends SVGProps<SVGSVGElement> {
  bgColor: string | Record<string, string>;
  bgD: string;
  fgColor: string | Record<string, string>;
  fgD: string;
  size: number;
  title?: string
  viewBoxSize: number;
  xmlns?: string;
}

const QRCodeSvg = forwardRef<SVGSVGElement, QRCodeSvgProps>(({ bgColor, bgD, fgColor, fgD, size, title, viewBoxSize, ...props }, ref) => (
  <svg {...props} height={size} ref={ref} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={size}>
    {title ? <title>{title}</title> : null}
    <path d={bgD} fill={typeof bgColor === "string" ? bgColor : undefined} />
    <path d={fgD} fill={typeof fgColor === "string" ? fgColor : undefined} />
  </svg>
))

export default QRCodeSvg
