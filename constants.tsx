import React from 'react';
import { BookOpen, Key, Zap, Share2, Map, ShieldAlert, CheckCircle, Info, Award } from 'lucide-react';
import { Section } from './types';

// This file contains all the text content. You can easily edit this to change the site's info.

export const SECTIONS: Section[] = [
  {
    id: 'rules',
    title: 'Правила',
    icon: <BookOpen size={20} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Правила Сервера</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Чтобы всем было комфортно играть, мы соблюдаем простой кодекс чести.
          Незнание правил не освобождает от ответственности.
        </p>

        <div className="grid gap-4 md:grid-cols-1">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
              <ShieldAlert className="text-red-400" /> 1. Гриферство
            </h3>
            <p className="text-slate-400">
              Разрушение чужих построек, воровство сундуков и убийство мирных животных строго запрещено.
              Мы ценим творчество и труд других игроков.
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
              <Info className="text-blue-400" /> 2. Общение
            </h3>
            <p className="text-slate-400">
              Уважайте других игроков. Запрещены оскорбления, спам в чате, реклама сторонних проектов
              и разжигание конфликтов на любой почве.
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
              <Zap className="text-yellow-400" /> 3. Читы и ПО
            </h3>
            <p className="text-slate-400">
              Использование X-Ray, Fly, KillAura и других модификаций, дающих нечестное преимущество,
              карается перманентным баном без права апелляции.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'join',
    title: 'Как попасть',
    icon: <Key size={20} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Как начать играть</h2>

        <div className="bg-slate-800 p-8 rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-400 uppercase text-sm font-bold tracking-wider mb-1">IP Адрес сервера</p>
              <code className="text-2xl md:text-3xl font-mono text-white bg-slate-900 px-4 py-2 rounded border border-slate-700 select-all cursor-pointer">
                ...
              </code>

            </div>
            <div className="text-right">
              <p className="text-slate-400 uppercase text-sm font-bold tracking-wider mb-1">Версия</p>
              <span className="text-xl text-white font-medium">Java Edition 1.21.4</span>
            </div>
      
            <img src="https://picsum.photos/400/300?random=2" alt="Метро" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Процесс регистрации</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-emerald-500 shrink-1 mt-1" />
              <span className="text-slate-300">Зайдите в наш Discord канал.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-emerald-500 shrink-0 mt-1" />
              <span className="text-slate-300">Оставьте заявку в канале <span className="text-emerald-300 font-mono">#whitelist</span> с вашим никнеймом.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-emerald-500 shrink-0 mt-1" />
              <span className="text-slate-300">Дождитесь одобрения администратора (обычно 10-15 минут).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-emerald-500 shrink-0 mt-1" />
              <span className="text-slate-300">Заходите на сервер и наслаждайтесь игрой!</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'features',
    title: 'Фишки сервера',
    icon: <Zap size={20} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Уникальные механики</h2>
        <p className="text-slate-300 text-lg">
          Наш сервер — это ванильное выживание с небольшими дополнениями для удобства и атмосферы.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-lg font-bold text-white mb-2">Голосовой чат</h4>
            <p className="text-slate-400 text-sm">
              Мы используем Plasmo Voice. Вы можете общаться с игроками рядом с вами, просто говоря в микрофон.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="text-lg font-bold text-white mb-2">Кастомные картины</h4>
            <p className="text-slate-400 text-sm">
              Используйте команду /art, чтобы загрузить свои изображения и использовать их как картины в игре.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-lg font-bold text-white mb-2">Скип ночи</h4>
            <p className="text-slate-400 text-sm">
              Если 50% игроков спят, ночь пропускается автоматически. Берегите свое время!
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="text-lg font-bold text-white mb-2">Экономика на алмазах</h4>
            <p className="text-slate-400 text-sm">
              Никаких виртуальных денег. Только натуральный обмен и торговля за алмазную руду.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'socials',
    title: 'Соцсети',
    icon: <Share2 size={20} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Мы в интернете</h2>
        <p className="text-slate-300">Следите за новостями и общайтесь с комьюнити вне игры.</p>

        <div className="flex flex-col gap-4 max-w-md">
          <a href="#" className="flex items-center gap-4 bg-[#5865F2] hover:bg-[#4752c4] text-white p-4 rounded-lg transition-colors group">
            <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform">
              {/* Simple placeholder icon for Discord */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 2.612 2.612 0 0 1-.363.75 2.61 2.61 0 0 1-.505 0 2.613 2.613 0 0 1-.363-.75.074.074 0 0 0-.079-.037A19.736 19.736 0 0 0 9.068 4.37a.072.072 0 0 0-.03.045 20.57 20.57 0 0 0-2.27 8.35c-.004.053.02.1.063.132a19.86 19.86 0 0 0 5.096 2.576.074.074 0 0 0 .08-.026 14.16 14.16 0 0 1 1.258-2.046.072.072 0 0 0-.04-.122 10.975 10.975 0 0 1-1.638-.78c-.045-.025-.047-.09-.004-.12a.66.66 0 0 1 .15-.093c.125-.068.252-.133.377-.203a.075.075 0 0 1 .082-.005c3.27 1.494 6.81 1.494 10.024 0a.075.075 0 0 1 .082.005c.126.07.253.135.378.203.047.027.106.052.15.093.043.03.041.095-.004.12a10.966 10.966 0 0 1-1.638.78.072.072 0 0 0-.04.122 14.15 14.15 0 0 1 1.258 2.046.074.074 0 0 0 .08.026 19.855 19.855 0 0 0 5.096-2.576.073.073 0 0 0 .063-.132 20.574 20.574 0 0 0-2.27-8.35.072.072 0 0 0-.03-.045zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" /></svg>
            </div>
            <span className="font-semibold text-lg">Наш Discord Сервер</span>
          </a>

          <a href="#" className="flex items-center gap-4 bg-[#0077FF] hover:bg-[#0066dd] text-white p-4 rounded-lg transition-colors group">
            <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm-2.052 16.925h-2.106v-7.2h2.106v7.2zm3.327-4.337c-1.282.096-1.92.935-2.233 1.558V14.2l-2.07.016v-7.29h2.07v1.07c.28-.887 1.455-1.353 2.508-1.045 1.574.462 1.635 2.533 1.635 3.32v3.96h-1.91v-3.643zm-4.38-5.32c-.752 0-1.36-.62-1.36-1.385 0-.763.608-1.383 1.36-1.383.754 0 1.363.62 1.363 1.383 0 .765-.61 1.385-1.363 1.385z" /></svg>
            </div>
            <span className="font-semibold text-lg">Группа ВКонтакте</span>
          </a>

          <a href="#" className="flex items-center gap-4 bg-[#FF0000] hover:bg-[#dd0000] text-white p-4 rounded-lg transition-colors group">
            <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </div>
            <span className="font-semibold text-lg">YouTube Канал</span>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'projects',
    title: 'Общие проекты',
    icon: <Map size={20} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Жизнь сервера</h2>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 bg-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="md:w-1/3 h-48 md:h-auto bg-slate-700 relative group">
              {/* Image Placeholder */}
              <img src="https://picsum.photos/400/300?random=1" alt="Спавн" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Спавн "Небесная Гавань"</h3>
              <p className="text-slate-400 mb-4">
                Центральный хаб сервера, построенный общими усилиями более 20 игроков.
                Включает в себя торговую площадь, зал славы и портальный зал в Незер.
              </p>
              <button className="self-start text-emerald-400 hover:text-emerald-300 font-semibold uppercase text-sm tracking-wide">
                Подробнее &rarr;
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 bg-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="md:w-1/3 h-48 md:h-auto bg-slate-700 relative group">
              <img src="https://picsum.photos/400/300?random=2" alt="Метро" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ледяная Магистраль</h3>
              <p className="text-slate-400 mb-4">
                Глобальный проект по соединению всех баз игроков через Незер.
                Более 10000 блоков ледяных дорог обеспечивают быстрое перемещение.
              </p>
              <button className="self-start text-emerald-400 hover:text-emerald-300 font-semibold uppercase text-sm tracking-wide">
                Карта путей &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
