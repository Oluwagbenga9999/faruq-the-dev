import {
  siCplusplus,
  siCss,
  siDocker,
  siExpress,
  siFastapi,
  siGithub,
  siGithubactions,
  siGrafana,
  siHelm,
  siHtml5,
  siJaeger,
  siJavascript,
  siJsonwebtokens,
  siKubernetes,
  siLinux,
  siMocha,
  siMongodb,
  siNetlify,
  siNodedotjs,
  siOpenapiinitiative,
  siOpentelemetry,
  siPostgresql,
  siPostman,
  siPrometheus,
  siPython,
  siReact,
  siReactrouter,
  siSupabase,
  siTailwindcss,
  siTerraform,
  siTrivy,
  siTypescript,
  siVercel,
  siVite,
  type SimpleIcon,
} from "simple-icons";
import { Code2 } from "lucide-react";

const icons: Record<string, SimpleIcon> = {
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  html: siHtml5,
  css: siCss,
  python: siPython,
  cplusplus: siCplusplus,
  nodedotjs: siNodedotjs,
  expressjs: siExpress,
  restfulapis: siOpenapiinitiative,
  jwtauthentication: siJsonwebtokens,
  vite: siVite,
  tailwindcss: siTailwindcss,
  reactrouterdom: siReactrouter,
  fastapi: siFastapi,
  gitgithub: siGithub,
  netlify: siNetlify,
  vercel: siVercel,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  supabase: siSupabase,
  docker: siDocker,
  githubactions: siGithubactions,
  linux: siLinux,
  terraform: siTerraform,
  kubernetes: siKubernetes,
  helm: siHelm,
  trivy: siTrivy,
  prometheus: siPrometheus,
  grafana: siGrafana,
  jaeger: siJaeger,
  opentelemetry: siOpentelemetry,
  alertmanager: siPrometheus,
  cicdpipelines: siGithubactions,
  unittestingmocha: siMocha,
  integrationapitesting: siPostman,
  postman: siPostman,
};

function normalize(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

interface TechIconProps {
  name: string;
  size?: number;
}

export default function TechIcon({ name, size = 18 }: TechIconProps) {
  const icon = icons[normalize(name)];

  if (!icon) {
    return <Code2 aria-hidden="true" size={size} className="shrink-0 text-zinc-500" />;
  }

  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} transform="scale(0.75) translate(4 4)" />
    </svg>
  );
}
