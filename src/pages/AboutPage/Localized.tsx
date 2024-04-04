import { useTranslation } from 'react-i18next'

const Localized: React.FC = () => {
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = (targetLanguage: string) => {
        i18n.changeLanguage(targetLanguage);
    }

    return (
        <div>
            <h2>You are seeing i18n and l10n here</h2>
            <p>The following texts will appear in different languages.</p>
            <hr />
            <h3>{t("welcome")}!</h3>
            <h4>{t("intro")}!</h4>

            <div>
                <button className="btn btn-warning" onClick={() => {handleChangeLanguage('en')}}>English</button>
                <span>  </span>
                <button className="btn btn-warning" onClick={() => {handleChangeLanguage('fr')}}>French</button>
                <span>  </span>
                <button className="btn btn-warning" onClick={() => {handleChangeLanguage('en-UK')}}>English UK</button>
            </div>
        </div>
    )
}

export default Localized